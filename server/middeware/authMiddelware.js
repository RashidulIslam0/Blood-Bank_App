const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers["authorization"];

    if (!authorizationHeader) {
      return res.status(401).send({
        success: false,
        message: "Authorization header is missing",
      });
    }

    const token = authorizationHeader.split(" ")[1];

    try {
      const decoded = JWT.verify(token, process.env.SECRET_KEY);
      req.body.userId = decoded.userId;
      next();
    } catch (err) {
      return res.status(401).send({
        success: false,
        message: "Auth Failed",
      });
    }
  } catch (error) {
    console.error(error);

    return res.status(500).send({
      success: false,
      error,
      message: "Auth Failed",
    });
  }
};
