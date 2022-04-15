require("dotenv").config();
const {sendMessage, getMessage} = require("../../services/chatService")

let postWebhook = async (req, res) => {
    // Parse the request body from the POST
    let body = req.body;
    const message = await sendMessage(body);
    if(message.error){
        res.status(400).send(message.message)
    }
        res.status(200).send(message.message)
    
};

let getWebhook = async (req, res) => {
    // Your verify token. Should be a random string.
    let VERIFY_TOKEN = process.env.MY_VERIFY_FB_TOKEN;

    // Parse the query params
    let mode = req.query['hub.mode'];
    let token = req.query['hub.verify_token'];
    let challenge = req.query['hub.challenge'];

    const result = getMessage(mode, token, challenge);
    if(result.error){
        return res.status(400).json(result.msg);
    }
    return res.status(200).json(result.challenge);
   
};

// Sends response messages via the Send API



module.exports = {
  postWebhook: postWebhook,
  getWebhook: getWebhook,
};

