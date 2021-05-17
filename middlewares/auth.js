const jwt = require("jsonwebtoken");
const { TOKEN_SIGNATURE } = require("../config");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, TOKEN_SIGNATURE);
    const userId = decodedToken.userId;

    if (req.body.userId && req.body.userId !== userId) {
      throw "Invalid user ID";
    } else {
      next();
    }
  } catch (error) {
    res.status(401).json({
      error: new Error(error),
    });
  }
};
