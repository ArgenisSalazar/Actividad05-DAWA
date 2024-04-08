const express = require('express');
const path = require('path');
let exphbs = require('express-handlebars');

const app = express();

app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', exphbs.engine({ 
    defaultLayout: 'indexHbs', 
    layoutsDir: 'views', 
    extname: '.hbs'
 }));


app.engine('.ejs', require('ejs').__express);

app.engine('.pug', require('pug').__express);

app.get('/pug', (req, res) => {
    res.render('indexPug.pug');
});

app.get('/hbs', (req, res) => {
    res.render('indexHbs.hbs');
});

app.get('/ejs', (req, res) => {
    res.render('indexEjs.ejs');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});
