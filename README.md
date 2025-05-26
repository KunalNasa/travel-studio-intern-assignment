# Complete Setup of the repository

This repository includes three folders. Frontend, Backend and Workflows. The setup for frontend and backend folders is mentioned in their respective repositories. 

## Workflows
The workflow icnludes `request_workflow.json` file and .env.example.

## Prerequisites
1. NodeJS v >= 20
2. Typescript v5
3. Docker installed (or Redis running locally)
4. Twilio Account for testing (Free)
5. localtunnel or ngrock

## Steps to run complete app locally.

Step 1. Go the backend folder and follow its steps to run it locally.

Step 2. Go to the frontend folder and follow its steps to run it locally.

Step 3. Go to the worflow folder and make .env file. Copy the .sample.env to .env

Step 4. Run the Redis using docker on same port as mentioned in your .env of workflows.

Step 5. Run The n8n worker with concurrency equals to 1 so that it handles one request at a time.

> cd worflows/ 

> source .env && n8n worker --concurrency=1

Step 6. Start n8n locally with command

> source .env && n8n start

step 7. The n8n will start on port 5678. Now generate a public url of this to call webhook using twilio.

> npx localtunnel --port 5678

Step 8. Save this URL, we will require it later.

step 9. Now, our system is up and we can setup whatsApp business API for twilio.

Step 10. Go to the http://localhost:5678 and click on create workflow through file.

Step 11. Drag and drop worflows/request-workflow.json file. 

Now We are done with the n8n and project Setup Part.

## Setting up WhatsApp business API using Twilio
Step 1. Go to https://console.twilio.com and signup if you don't have account.

Step 2. Click on create account and navigate to setup whatsApp sandbox.

Step 3. Obtain `accountSid` and `authToken` and twilio's dummy phone number.

Step 4. Replace the `accountSid`, `authToken` and twilios' dummy number in your n8n workflow with the actual data you have obtained in step 3. Also, add your phone number in `to` field of n8n.

Step 5. Click on save worflow and test it by sending message to twilio dummy number through your phone number.

Step 6. Now, go the webhook workflow in n8n and copy the webhook url.

Step 7. Replace the http://localhost:5678 part of your webhook url with the local tunnel url that we created in `step 7` of `complete Setup of the repository.`.

Step 8. Copy this new url and paste it to the twilio's `sandbox settings` > `When a message comes in` field and then click on save. The twilio will call this webhook when message will be recieved.

Step 9. Now we are all set to test our workflow with everything set and all of our servers running.

## Final Steps
Click on test workflow and send message to twilio's dummy phone number. You will see the message reply and entry logged in your database.


## Important points to keep in my while setting up
1. Ensure all servers are running.
2. Ensure you are using public webhook url and not localhost webhook url. Localhost webhook url will not be recognized by Twilio.
3. Make sure you have replaced all credentials in n8n with your actual Twilio credentials.
4. Make sure you have applied migrations to your database.


