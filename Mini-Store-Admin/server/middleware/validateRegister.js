const validateRegister = (req,res,next)=>{

        const {firstname,lastname,mobnumber,email,password} = req.body;

        if(!firstname || !lastname || !mobnumber || !email || !password){
        return res.status(400).json({message:"All field are required"})
    }

    if(!/^[A-Za-z]+$/.test(firstname)){
        return res.status(400).json({field : "firstname",message:"First name must contain only letters"})
    }
    if(!/^[A-Za-z]+$/.test(lastname)){
        return res.status(400).json({field : "lastname",message:"last name must contain only letters"})
    }

    if(!/^[0-9]{10}$/.test(mobnumber)){
        return res.status(400).json({field : "mobnumber",message:"Mobile number must contain exactly 10 digits"})
    }

    if(!/^\S+@\S+\.\S+$/.test(email)){
        return res.status(400).json({field : "email",message:"invalid email"})
    }

    if(password.length < 6){
        return res.status(400).json({field : "password",message:"password must be at least 6 charcter"})
    }

    next();

}

export default validateRegister;