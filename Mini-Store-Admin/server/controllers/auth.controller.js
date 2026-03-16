import User from '../model/User.js'
import bcrypt from "bcrypt";


const register = async (req,res)=>{


    const {firstname,lastname,mobnumber,email,password} = req.body;

    
    try {

        const existingMobile  = await User.findOne({mobnumber});

    if(existingMobile){

        return res.status(400).json({field : "mobnumber" ,message:"Mobile Number Already Exists"})

    }


    const existUser = await User.findOne({email});
        
    if(existUser){

        return res.status(400).json({field : "email",message:"email Already Exists..."})

    }

        const hashpassword = await bcrypt.hash(password,10);
        
        await User.create({
            firstname,
            lastname,
            mobnumber,
            email,
            password:hashpassword
        })
        return res.status(201).json({message:"User create Successfully"})

    } catch (error) {

        return res.status(500).json({message:"Internal server error"})
    }

}

export default register;