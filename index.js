const express = require('express'),
      app = express();


    app.use(()=>{
        console.log('we got a new request');
    });


    app.listen(3000, ()=>{
      console.log('Listening on port 3000');
    });