import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
}, { timestamps: true });

// YEH LINE SABSE IMPORTANT HAI:
const Contact = mongoose.model("Contact", contactSchema);
export default Contact;  

