const newman = require('newman');
//collection_name = './' + process.argv[2];
collection_name = 'c:\\temp\\postman\\test_collection.postman_collection.json';
newman.run({
    collection: require(collection_name),
    reporters: 'cli'
}).on('beforeRequest', function (error, args) {
    if (error) {
    }
    else {
        // Log the response body
        //console.log("ARGS: " + args.response.stream.toString());
        console.log("");
        console.log("request headers:");
        console.log(args.request.headers);
    }
}).on('request', function (error, args) {
    if (error) {
    }
    else {
        // Log the response body
        //console.log("ARGS: " + args.response.stream.toString());
        console.log("");
        console.log("response headers:");
        console.log(args.response.headers);
    }
});
