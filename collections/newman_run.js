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
    console.log("\n---request headers");
    args.request.headers.members.forEach(function(item, i) {
        console.log(i + ": " + item.key + ": " + item.value);
    });
    console.log("\n---request body");
    console.log (args.request.body.raw);

    console.log("\n---response headers");
    args.response.headers.members.forEach(function(item, i) {
        console.log(i + ": " + item.key + ": " + item.value);
    });
    console.log("\n---response body");
    console.log(args.response.stream.toString());
});
