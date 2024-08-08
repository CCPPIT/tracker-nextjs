import mongoose from "mongoose";

const userShema=new mongoose.Schema({
    clerkUserId:{type:String,unique:true,required:true},
    emailAddress:{type:String,unique:true,required:true},

},
{timestamps:true}
);
const User=mongoose.models.User||mongoose.model("User",userShema);
export default User;
