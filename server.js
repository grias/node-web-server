const express = require('express');

const port = 3000;
const app = express();
app.use(express.static(__dirname + '/public'));



app.get('/', (req, res) => {
  res.render('home.html', (e, res) => {
    if (e) {
      return console.log(e);
    }
    console.log(res);
  });
});

app.listen(3000, () => {
  console.log(`Server started at port ${port}`);
})
