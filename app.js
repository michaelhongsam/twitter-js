const express = require( 'express' );
const app = express(); // creates an instance of an express application

app.use(function (req, res, next) {
    // do your logging here
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    //console.log('incoming request is: ' + Object.keys(req));
    console.log(`INCOMING method: ${req.method} url:${req.url} statusCode:${res.statusCode}`);
    console.log(`RESPONSE: ${res.statusCode} `);
    
    next();
    // study how to use morgan
})
  

app.get ('/', (req, res) => res.send('Hello'));

app.get ('/*', (req, res) => res.send('World'));


app.listen(3000, () => console.log('Example app listening on port 3000!'))