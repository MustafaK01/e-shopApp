const jwt=require('jsonwebtoken');
const app_secret="appsecret";
const username="admin";
const password = "secret";

module.exports = function(req,res,next){
    if(req.url=='/login'&&req.method=='POST'){
        if(req.body.username == username &&req.body.password==password){
            let token = jwt.sign({data:username, expiresIn:'1h'},app_secret);
            res.json({success:true,token:token});
        }else{
            res.json({sucecss:false});
        }
        res.end();  
        return;
    }else{
        if((req.url.startsWith("/products")||req.url.startsWith("/categories"))&&req.method!='GET'){
            let token = req.headers['authorization']
            if(token!=null&&token.startsWith('Bearer<')){
                token=token.substring(7,token.length-1);
                try{
                    jwt.verify(token,app_secret);
                    next();
                    return;
                }catch(error){
                    
                }
            }else{
                res.statusCode=401;
            }
        }
    }
    next();
}

