const express = require("express");
const http = require("http");
const five = require("johnny-five");
const { RaspiIO } = require('raspi-io');

var app = express();

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

var server = new http.Server(app);

const board = new five.Board({io: new RaspiIO(), repl: false});

board.on("ready", function() {

  var relay1 = new five.Relay({pin:"GPIO22",type: "NO"});
  var relay2 = new five.Relay({pin:"GPIO5",type: "NO"});
    
   app.get("/water/:action", (req, res) => {

        switch(req.params.action) {

           case 'on':
                relay1.close();
                res.send(relay1.value.toString());
                break;
           case 'off':
                relay1.open();
                res.send(relay1.value.toString());
                break;
           case 'status':
                res.send(relay1.value.toString());
                break;
           default:
                console.log('Unknown command: ' + req.params.action);
                res.sendStatus(400);
        }   
  });

  app.get("/light/:action", (req, res) => {

        switch(req.params.action) {

          case 'on':
                relay2.close();
                res.send(relay2.value.toString());
                break;
          case 'off':
                relay2.open();
                res.send(relay2.value.toString());
                break;
          case 'status':
                res.send(relay2.value.toString());
                break;
          default:
                console.log('Unknown command: ' + req.params.action);
                res.sendStatus(400);
        }   
  });

  server.listen(3030, () => {
    console.log('Outdoor controller listens to port 3030');
  });
});
