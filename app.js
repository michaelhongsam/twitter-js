const express = require('express');
const nunjucks = require('nunjucks');
const volleyball = require('volleyball');
const routes = require('./routes/index.js');

const app = express(); // creates an instance of an express application

app.use('/', routes);

app.use(function (req, res, next) {
    // do your logging here
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    //console.log('incoming request is: ' + Object.keys(req));
    console.log(`INCOMING method: ${req.method} url:${req.url} statusCode:${res.statusCode}`);
    console.log(`RESPONSE: ${res.statusCode} `);
    
    next();
    // study how to use morgan
})

// in some file that is in the root directory of our application... how about app.js?
var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks

nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
    console.log(output);
});

// app.get ('/*', (req, res) => res.render('index', {title: locals.title, people: locals.people}));

app.listen(3000, () => console.log('Example app listening on port 3000!'))