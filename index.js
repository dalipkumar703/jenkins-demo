'use strict';

// const express = require('express');
const fs = require('fs');

// // Constants
// const PORT = 8085;
// const HOST = 'localhost';

// // App
// const app = express();
// app.get('/', (req, res) => {

  fs.readFile(`${__dirname}/sum.txt`, 'utf-8', (err, data) => {
        if (!err) {
          let result = 0;

          if (data === '0') {
            result = 5;
          }
          else {
            result = (parseInt(data) + 5);
          }

          fs.writeFile(`${__dirname}/sum.txt`, result, (error) => {
            if (error) {
              console.log('error:', error);
            }
            else{
            	console.log("write successfully.");
            }
          });
        }
      });

//   res.send('Hello world\n');
// });

// app.listen(PORT, HOST);
// console.log(`Running on http://${HOST}:${PORT}`);