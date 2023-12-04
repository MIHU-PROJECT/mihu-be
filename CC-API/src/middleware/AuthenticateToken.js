const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) 
      return res.sendStatus(401);
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if(err) return res.status(401).send({ 
        message: "Wrong Token or expired Token"
      });

      if(err) return res.sendStatus(403);

      req.email = decoded.email;
      next();
    });
}
  
module.exports = authenticateToken;