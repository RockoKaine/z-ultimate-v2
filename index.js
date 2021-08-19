const express = require('express'),
      path = require('path'),
      app = express();

      app.set('view engine', 'ejs');
      app.set('views', path.join(__dirname,"/views"));
      app.use(express.static(path.join(__dirname, 'incs')));



    app.get('/', (req, res)=>{
        res.render("partials/home.ejs");
    });


    app.listen(3000, ()=>{
      console.log('Listening on port 3000!');
    });