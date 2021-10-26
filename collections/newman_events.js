// https://www.npmjs.com/package/newman#using-newman-as-a-library

const newman = require('/usr/local/lib/node_modules/newman');
collection_name = './' + process.argv[2];

console.log ('collection_name = ' + collection_name);

newman.run({
    collection: require(collection_name),
    reporters: 'cli'
})
.on('start', function (error, args)             {console.log("----------> The start of a collection run");})
.on('beforeIteration', function (error, args)   {console.log("----------> Before an iteration commences");})
.on('beforeItem', function (error, args)        {console.log("----------> Before an item execution begins (the set of prerequest->request->test)");})
.on('beforePrerequest', function (error, args)  {console.log("----------> Before prerequest script is execution starts");})
.on('prerequest', function (error, args)        {console.log("----------> After prerequest script execution completes");})
.on('beforeRequest', function (error, args)     {console.log("----------> Before an HTTP request is sent");})
.on('request', function (error, args)           {console.log("----------> After response of the request is received");})
.on('beforeTest', function (error, args)        {console.log("----------> Before test script is execution starts");})
.on('test', function (error, args)              {console.log("----------> After test script execution completes");})
.on('beforeScript', function (error, args)      {console.log("----------> Before any script (of type test or prerequest) is executed");})
.on('script', function (error, args)            {console.log("----------> After any script (of type test or prerequest) is executed");})
.on('item', function (error, args)              {console.log("----------> When an item (the whole set of prerequest->request->test) completes");})
.on('iteration', function (error, args)         {console.log("----------> After an iteration completes");})
.on('assertion', function (error, args)         {console.log("----------> This event is triggered for every test assertion done within test scripts");})
.on('console', function (error, args)           {console.log("----------> Every time a console function is called from within any script, this event is propagated");})
.on('exception', function (error, args)         {console.log("----------> When any asynchronous error happen in scripts this event is triggered");})
.on('beforeDone', function (error, args)        {console.log("----------> An event that is triggered prior to the completion of the run");})
.on('done', function (error, args)              {console.log("----------> This event is emitted when a collection run has completed, with or without errors");})
;
