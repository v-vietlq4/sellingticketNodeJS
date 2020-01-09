const path = require('path');
var db = require('./models');
const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');
const hbs_sections = require('express-handlebars-sections');
const expressSession = require('express-session');
const passport = require('passport');

const app = express();
const port = process.env.PORT || 3000;
app.engine(
  'hbs',
  expressHbs({
    layoutsDir: 'views/layouts/',
    defaultLayout: 'main-layout',
    extname: 'hbs',
    helpers: {
      section: hbs_sections(),
      format: val => numeral(val).format('0,0')
    }
  })
);


app.set('view engine', 'hbs');
app.set('views', 'views');

const movieRoutes = require('./routes/MovieRoute');
const categoryRoute = require('./routes/CategoryRoute');
const userRoute = require('./routes/UserRoute');
const productRoute = require('./routes/ProductRoute');
const listRoute = require('./routes/ListRoute');

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public',express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession({secret: 'keyboard cat'}));
app.use(passport.initialize());
app.use(passport.session());



app.use('/category',categoryRoute);
app.use(movieRoutes);
app.use(userRoute);
app.use(productRoute);
app.use(listRoute);
// app.use(errorController.get404);
db.sequelize
  .sync()
  .then(result => {
    // console.log(result);
    app.listen(port);
  })
  .catch(err => {
    console.log(err);
  });

