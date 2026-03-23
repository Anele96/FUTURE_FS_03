const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 5000;

/* MIDDLEWARE */
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

/* CONNECT DB */
mongoose.connect("mongodb://127.0.0.1:27017/timecapsuleDB")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

/* MODELS */
const Booking = mongoose.model("Booking", {
  name: String,
  email: String,
  service: String,
  date: String,
  time: String,
  message: String
});

const Like = mongoose.model("Like", {
  userEmail: String,
  imageId: String,
  imagePath: String // ✅ IMPORTANT
});

/* BOOKINGS */
app.post("/api/bookings", async (req,res)=>{
  const b = new Booking(req.body);
  await b.save();
  res.json({message:"saved"});
});

app.get("/api/bookings", async (req,res)=>{
  res.json(await Booking.find());
});

app.delete("/api/bookings/:id", async (req,res)=>{
  await Booking.findByIdAndDelete(req.params.id);
  res.json({message:"deleted"});
});

/* LIKES */
app.post("/api/likes", async (req,res)=>{
  console.log("LIKE:", req.body); // DEBUG

  const l = new Like(req.body);
  await l.save();

  res.json({message:"saved"});
});

app.get("/api/likes", async (req,res)=>{
  res.json(await Like.find());
});

app.delete("/api/likes/:id", async (req,res)=>{
  await Like.findByIdAndDelete(req.params.id);
  res.json({message:"deleted"});
});

/* START */
app.listen(PORT, ()=>{
  console.log("Server running http://localhost:5000");
});