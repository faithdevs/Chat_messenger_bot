# messenger-bot-nodejs
- A simple Facebook Messenger Chatbot using Messenger Platform (Node.js)
- Test this bot (this project) now : https://my-fb-bot-messenger.herokuapp.com/

## How to run this project:
### Getting Started
-  Clone this repository
-   `npm install`  to install node.js in CMD / Terminal
- Make a new file **.env**
- Setup the mongo database.
#### How to setup MongoDB

In the .env file :

1. MONGODB_URI = 

Filling these variable depends upon the steps below.

- Firstly, you have to sign up for an account [here](https://account.mongodb.com/account/register?n=%2Fv2%2F5f4fed9616fc651a9ef5d934&nextHash=%23clusters). Then, from the left panel select the option "Clusters", click the button "Create a New Cluster", which should be near the top right corner, and fill the required details.

After that, we need to create a collection inside a database. In the panel of newly created cluster it's a button named "Collections". Click on it. We then click on the button "+ Create Database" and fill the required details. In my case, "DATABASE NAME" is "MessengerBot" (same name as the cluster) and "COLLECTION NAME" is "messages". 
The given database name is the "DB_NAME" variable from the .env file and given collection name is the "DB_COLLECTION" variable.

In order to connect to the database, you need to set up a user who has database access. From the left panel select "Database Access", then click the button "+ ADD NEW DATABASE USER" near the top right corner. I would suggest going with "Password" for "Authentication Method" and "Read and write to any database" for the "Database User Privileges". The username and password set for "Password Authentication" are the .env variables "MONGO_DB_USER" and "MONGO_DB_PASSWORD".

- Secondly, you have to connect your cluster to your application. Click the "Connect" button, which is inside your cluster panel, and click "Connect your application".

After that, you should see the connection string which is under "Add your connection string into your application code". You have to replace <password> with the password set for the database user and <dbname> with the name of the database that connections will use by default. In my case, "dbname" is "MessengerBot". 
The connection string that you have right now is the DB_CONNECTION from the .env file. Until here you have filled the 3 required variables, but there is one more thing to do.

- Final step: from the left panel select "Network Access". Then click the button "+ ADD IP ADDRESS" near the top right corner. Depending on the security you want you can choose to manually add all the IP addresses you will be connecting with to the DB or you can choose to connect from everywhere, regarding the used IP address.

### Connect facebook webhook
- To get .env variables for these:
1. MY_VERIFY_FB_TOKEN=
2. FB_PAGE_TOKEN=
3. PAGE_ID=
#### Follow the instructions here to get the .env variables:
- Guide to setup Facebook Webhook: https://developers.facebook.com/docs/messenger-platform/getting-started/webhook-setup
- Guide to setup Facebook App : https://developers.facebook.com/docs/messenger-platform/getting-started/app-setup

### Run Application 
```npm start``` to run project 
#### Storage of messages

All the messages received from users are stored in a MongoDB database. Each website visitor has an unique id assigned on commencement of a Messenger conversation, making the storage of messages structured in an easy way.

#### 2 To deploy to Heroku app
- Deploy app to Heroku ( need to setup dev dependencies:
heroku config:set NPM_CONFIG_PRODUCTION=false
)
- Config env variables (setup dev dependencies)

