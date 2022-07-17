# Backend Building procedures

## Instantiate Mongodb 

Firstly make sure to start mongodb service:

```shell
sudo service 
```

After, instantiate mongodb:

```shell
mongosh mongodb://localhost:27017/fluffshop
```

Then quit the MongoDB shell.

## Install dependencies and populate Database

```shell
npm install
npm run populate
```

## Run API

```shell
npm start
```

API wil be running at `http://localhost:3000`.