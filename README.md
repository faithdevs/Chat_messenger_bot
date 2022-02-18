# Messenger-bot-nodejs
- A simple Facebook Messenger Chatbot using Messenger Platform (Node.js)
- Test this bot (this project) now : https://my-fb-bot-messenger.herokuapp.com/

# Demo of the bot
![www-screencapture-com-2022-2-18-19-22_ePcVbjG3](https://user-images.githubusercontent.com/47572498/154745189-877d0209-e77e-47d0-af77-bdb0c1e53b5a.gif)


## How to run this project:
### 1. Clone this project
- Copy file .env.example -> create a .env file at the root folder -> fill all app variables in the .evn file
- Run the ```npm install``` to test project at the localhost

### 2. Create a Heroku app, a Facebook Page, a Facebook App.
#### 2.1 Create a Heroku app
- Deploy app to Heroku ( need to setup dev dependencies:
```heroku config:set NPM_CONFIG_PRODUCTION=false```
)
- Config env variables (setup dev dependencies)
#### 2.2 Facebook Page
- Create a Facebook Page
- Config Whitelisted Domains (add the Heroku app domain)
#### 2.3 Facebook App
- Create a Facebook App
- Config webhook
