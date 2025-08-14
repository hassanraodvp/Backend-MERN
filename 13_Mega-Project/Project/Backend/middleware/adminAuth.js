import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.json({ success: false, message: "Unauthorized User! Login again." });
    }

    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    // Correct check
    if (
      token_decode.role !== "admin" ||
      token_decode.email !== process.env.ADMIN_EMAIL
    ) {
      return res.json({ success: false, message: "Not Authentic User!" });
    }

    req.user = token_decode;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};

export default adminAuth;
