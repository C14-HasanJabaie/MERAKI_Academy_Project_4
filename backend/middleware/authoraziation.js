const authorization = (string) => {
    return (req, res, next) => {
      const userPermission = req.token.permissions;
      console.log(string, userPermission);
  
      if (userPermission.includes(string)) {
        next();
      } else {
        res.status(403).json({
          message: "Forbidden",
        });
      }
    };
  };
  
  module.exports = authorization;