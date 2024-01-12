// const userModel = require("../models/userModel");
// const bcrypt = require("bcryptjs");

// const registerController = async (req, res) => {
//   try {
//     const exisitingUser = await userModel.findOne({ email: req.body.email }); //validation
//     //validation
//     if (exisitingUser) {
//       return res.status(200).send({
//         success: false,
//         message: "User ALready exists",
//       });
//     }

//     //hash password
//     const solt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(req.body.password, solt);
//     req.body.password = hashedPassword;

//     //rest data

//     const user = new userModel(req.body);
//     await user.save();
//     return res.ststus(201).send({
//       success: true,
//       message: "User Registerd Successfully",
//       user,
//     });
//   } catch (error) {
//     console.log(error);
//     res.ststus(500).send({
//       success: false,
//       message: "Error In Register API",
//       error,
//     });
//   }
// };

// module.exports = { registerController };

const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");

const registerController = async (req, res) => {
  try {
    const existingUser = await userModel.findOne({ email: req.body.email }); // validation

    // validation
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "User already exists",
      });
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;

    // rest data
    const user = new userModel(req.body);
    await user.save();

    return res.status(201).send({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Register API",
      error,
    });
  }
};

module.exports = { registerController };
