import Conversation from '../models/conversation.model.js';
import Message from '../models/message.model.js'
import { getReceiverSocketId } from '../socket/socket.js';
import { io } from '../socket/socket.js';


export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params; // id renamed as receiver id
        const senderId = req.user._id; // for get the userId we have to set it using middleware
        
        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId]},
        })

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            })
        };

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        // await conversation.save();
        // await newMessage.save();

        await Promise.all([conversation.save(), newMessage.save()]); // This will save parallel

        //real time socket functionality
        const receiverSocketId = getReceiverSocketId(receiverId);
        if (receiverSocketId) {
            io.to(receiverSocketId).emit("newMessage", newMessage) // used to send events spesific client
        }

        res.status(201).json(newMessage);
    }
    catch (error) {
        console.log("Error in sendMessage controller:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const getdMessage = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;
        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] }
        }).populate("messages"); // Mongoose provide messages field
        
        if (!conversation) return res.status(200).json([]);

        const message = conversation.messages;

        res.status(200).json(message);

    } catch (error) {
        console.log("Error in getMessages controller:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}