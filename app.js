const express = require('express');
const fs = require('fs');
const replaceTemplate = require('./modules/replaceTemplate');

const app = express();

const data = JSON.parse(fs.readFileSync(
    `${__dirname}/data.json`
    ,'utf-8'))

const tempOverview = fs.readFileSync(
    `${__dirname}/index.html`,
    'utf-8'
  );
    
const tempCard = fs.readFileSync(
    `${__dirname}/templates/template-card.html`,
    'utf-8'
  );


app.use(express.static('public'));

app.get('/daily', (req, res) => {
    const time = 'daily'
    const cardsHtml = data.map(el => replaceTemplate(tempCard, el, time)).join('');
    const output = tempOverview.replace('{%CARDS%}', cardsHtml);
    res.send(output);
})
app.get('/weekly', (req, res) => {
    const time = 'weekly'
    const cardsHtml = data.map(el => replaceTemplate(tempCard, el, time)).join('');
    const output = tempOverview.replace('{%CARDS%}', cardsHtml);
    res.send(output);
})
app.get('/monthly', (req, res) => {
    const time = 'monthly'
    const cardsHtml = data.map(el => replaceTemplate(tempCard, el, time)).join('');
    const output = tempOverview.replace('{%CARDS%}', cardsHtml);
    res.send(output);
})


app.listen(3000);