export default function handler(req,res){

    const ADMIN={
    user:"avadh4258",
    pass:"avadh4258"
    }
    
    if(req.method==="POST"){
    
    const {username,password}=req.body
    
    if(username===ADMIN.user && password===ADMIN.pass){
    
    res.status(200).json({
    success:true
    })
    
    }else{
    
    res.status(401).json({
    success:false
    })
    
    }
    
    }else{
    
    res.status(405).json({
    message:"Method not allowed"
    })
    
    }
    
    }