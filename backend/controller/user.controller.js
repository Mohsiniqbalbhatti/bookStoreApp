import User from "../model/user.model.js";
import becryptjs from "bcryptjs";
export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User Email already exist" });
    }
    const hashPassword = await becryptjs.hash(password, 10);
    const createdUser = new User({
      fullname: fullname,
      email: email,
      password: hashPassword,
    });

    await createdUser.save();
    res.status(200).json({
      message: "User Created Successfully",
      user: {
        _id: createdUser._id,
        fullname: createdUser.fullname,
        email: createdUser.email,
      },
    });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ message: "Internal Sever Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid User name or Password" });
    }
    const isMatch = await becryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid User name or Password" });
    }

    res.status(200).json({
      message: "Login SuccessFull",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
    });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
