const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());
hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home page'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About page'
  });
});

app.listen(3000, () => {
  console.log(`Server started at port ${port}`);
})
