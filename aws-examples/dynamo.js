var AWS = require('aws-sdk');
AWS.config.region = 'us-west-2';

var db = new AWS.DynamoDB();
// db.listTables(function(err, data) {
//   console.log(data.TableNames);
// });

function getItem(oid) {
	var params = {
		Key: {
			"Obj Id": {
				"N": ""+oid
			}
		},
		TableName: 'guerrini-first-or'
	};

	db.getItem(params, function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else     console.log(data);           // successful response
	});	
}


console.log("Starting DynamoDB interactions...");

getItem(1);


console.log("===== Writing item =====");

var params = {
	Item: {
		"Obj Id": { "N": "2" },
		"Foo": { "S": "Bar" },
		"Status": { "S": "Written!" }	
	},
	TableName: 'guerrini-first-or'
};


db.putItem(params, function(err, data) {
	if (err) console.log(err, err.stack); // an error occurred
	else     console.log(data);           // successful response
});	

console.log("===== Reading New Item =====");
getItem(2);