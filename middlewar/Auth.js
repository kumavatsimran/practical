const user = require("../models/user");
const jwt=require('jsonwebtoken')

const isAuth = (req,res,next)=>{
    let {user} = req.cookies; 

    if(user){
        next();
    }else{
        return res.redirect('/login');
    }
}
const isAuthjwt = (req, res, next) => {
    let { token } = req.cookies;
    let User=jwt.verify(token,'priveat-key')
    if (User.role=="adim") {
      return next();
    } else {
      return res.redirect("/login");
    }
  };

module.exports = { isAuth,isAuthjwt };