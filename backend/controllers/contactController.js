import Contact from "../models/Contact.js";

export const saveContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "All fields required" });
    }

    await Contact.create({ name, email, message });

    res.status(201).json({
      success: true,
      message: "Contact saved successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

