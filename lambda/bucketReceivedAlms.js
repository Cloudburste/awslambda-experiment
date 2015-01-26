console.log('Loading event');
var aws = require('aws-sdk');
var s3 = new aws.S3({apiVersion: '2006-03-01'});

function logEventInDB(event) {
	var db = new aws.DynamoDB();

	var params = {
		Item: {
			"eTag": { "S": event.Records[0].s3.object.eTag },
			"AddedDate": { "S": event.Records[0].eventTime },
			"Status": { "S": "Written!" },
			//"event": { "M": event }
		},
		TableName: 'guerrini-second-or'
	};


	db.putItem(params, function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else     console.log(data);           // successful response
	});  
}



exports.handler = function(event, context) {
	 console.log('Received event:');
	 console.log(JSON.stringify(event, null, '  '));
	 // Get the object from the event and show its content type
/*   var bucket = event.Records[0].s3.bucket.name;
	 var key = event.Records[0].s3.object.key;
	 s3.getObject({Bucket:bucket, Key:key},
			function(err,data) {
				if (err) {
					 console.log('error getting object ' + key + ' from bucket ' + bucket + 
							 '. Make sure they exist and your bucket is in the same region as this function.');
					 context.done('error','error getting file'+err);
				}
				else {
					 console.log('CONTENT TYPE:',data.ContentType);
					 context.done(null,'');
				}
			}
	 );*/
	 logEventInDB(event);
};