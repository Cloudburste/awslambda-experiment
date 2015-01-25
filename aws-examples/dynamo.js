var AWS = require('aws-sdk');
AWS.config.region = 'us-west-2';

var db = new AWS.DynamoDB();
db.listTables(function(err, data) {
  console.log(data.TableNames);
});