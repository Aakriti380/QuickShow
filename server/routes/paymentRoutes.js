import express from "express";
import Razorpay from "razorpay";
import crypto from "crypto";
import Show from "../models/Show.js";

const router = express.Router();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

//order is created
router.post("/create-order", async (req,res) => {
  try {
    
const { showId, selectedSeats } = req.body;// frontend ne bheja

const showData = await Show.findById(showId);//db se show uthao

const amount = showData.showPrice * selectedSeats.length;

    const order = await razorpay.orders.create({

      amount: amount * 100, // ₹ → paise
      currency: "INR",
    });

    res.json(order);
  } catch (err) {
    console.log("RAZORPAY ERROR:", err); //jb hardcoded key use ki thi to error aayi thi
    res.status(500).json({ error: err.message });
  }
});

// Payment Verification
router.post("/verify", (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
  } = req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body)
    .digest("hex");

  if (expectedSignature === razorpay_signature) {
    res.json({ success: true });
  } else {
    res.status(400).json({ success: false });
  }
});

export default router;