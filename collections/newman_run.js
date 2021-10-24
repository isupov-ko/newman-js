const newman = require('/usr/local/lib/node_modules/newman');
collection_name = './' + process.argv[2];

console.log ('collection_name = ' + collection_name);

// newman.run({
//     collection: require(collection_name),
//     reporters: 'cli'
// })

newman.run({
    collection: require(collection_name),
    reporters: 'cli'
}).on('request', function (error, args) {
    // this events receive after response of the request is received

    // Log the response headers
    console.log("");
    console.log("request body:");
    console.log(args.request.body.toString());

    // console.log("");
    // console.log("response headers:");
    // console.log(args.response.headers);
});
