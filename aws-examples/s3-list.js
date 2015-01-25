// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

/**
 * Don't hard-code your credentials!
 * Export the following environment variables instead:
 *
 * export AWS_ACCESS_KEY_ID='AKID'
 * export AWS_SECRET_ACCESS_KEY='SECRET'
 */

// Set your region for future requests.
AWS.config.region = 'us-west-2';


var s3bucket = new AWS.S3({params: {Bucket: 'guerrini-first-or'}});
s3bucket.makeUnauthenticatedRequest('listObjects', function(err,data) {
	if (err) { console.log("Error:", err); }
	else {
		// console.log(data);
		for (var index in data.Contents) {
			var fileinfo = data.Contents[index];
			// console.log(fileinfo);
			console.log("File: ", fileinfo.Key);
		}
	}
});
// console.log(results);


// var s3 = new AWS.S3();
// s3.listBuckets(function(err, data) {
//   if (err) { console.log("Error:", err); }
//   else {
//   	// console.log("Fetched bucket information...");
//     for (var index in data.Buckets) {
//       var bucket = data.Buckets[index];
//       console.log("Bucket: ", bucket.Name, ' : ', bucket.CreationDate);
//     }
//   }
// });