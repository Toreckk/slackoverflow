# Serverless stackoverflow slack integration

![](https://res.cloudinary.com/toreckk/image/upload/v1566064713/slackoverflow/slackoverflow2.gif)

A stack overflow integration for slack in nodejs

## Description

- slackOverflow is a serverless app that quickly searches relevant stack overflow questions
- Deployed as a NodeJS AWS Lambda using the Serverless Framework
- `/overflow [search term]` to get the top 5 most relevant questions from stack overflow visible only to you

## Setup

1.  Create a new app for your workspace
2.  In the features section add a new Slash command with the following properties:

        - Command: /overflow
        - Request URL: https://dppyz5aju3.execute-api.eu-central-1.amazonaws.com/dev/
        - Short Description: Quick Stack Overflow search
        - Usage Hint: [search terms]

    As long as you keep the request URL you can customize the rest of the properties as you wish

3.  In OAuth & Permissions > Scope section add a permission scopes for "commands"

## Developing

If you want to host your own serverless slackOverflow service

1. Install serverless

   `npm install -g serverless`

2. If you've never used serverless before:

   Get your security credentials (Access key ID and Secret Access key) for your AWS Lambda account:

   `serverless config credentials --provider aws --key ACCESS_KEY_ID --secret --SECRET_ACCESS_KEY`

3. Install npm packages

   `npm install`

4. Deploying to AWS Lambda

   `serverless deploy`

## Contributing

- Please use the [issue tracker](https://github.com/Toreckk/slackoverflow/issues) if you find a bug, error or feature requests.
