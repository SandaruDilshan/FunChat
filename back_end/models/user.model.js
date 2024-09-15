import mongoose, { mongo } from "mongoose";

const userSchema =  new mongoose.Schema(
    {
        fullName:{
            type:String,
            required: true
        },
        userName:{
            type:String,
            required: true,
            unique:true
        },
        password:{
            type:String,
            required:true,
            minlength:6
        },
        gender:{
            type:String,
            required:true,
            enum:["male","female"]
        },
        profilePic:{
            type:String,
            default:"",
        },
    // CreatedAt and UpdatedAt
},{timestamps: true});

const User = mongoose.model("User", userSchema); //Here we use singuler and first letter capital word for model name(like User)

export default User;