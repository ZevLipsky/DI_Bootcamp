import Users from "../Models/userModel.js";

export const registerUser = async(req, res) => {
    const {username, password, firstname, lastname} = req.body;

    const newUser = new Users({username, password, firstname,lastname})


    try{
        await newUser.save()
        res.status(200).json(newUser)
    }catch(erros){
        res.status(500).json()
    }
}