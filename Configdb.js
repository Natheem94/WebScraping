const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const dbName = 'webscraping';
const dbUrl = 'mongodb+srv://natheem:nat190394@webscraping.xgefvta.mongodb.net/test';
module.exports = {dbName,dbUrl,mongodb,MongoClient}