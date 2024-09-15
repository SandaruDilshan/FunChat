import mongoose, { mongo } from "mongoose";

const conversationSchema = new mongoose.Schema({
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId, //this is comming from mongodb
            ref: 'User'
        },
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Message',
            default: []   // when we start the conversation it is gonna be the empty array
        },
    ],
}, { timestamps: true });

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;