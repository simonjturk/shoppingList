const express = require('express');
const path = require('path');
const compression = require('compression')
const ngApp = express();


ngApp.use(compression())


ngApp.use(express.static('./dist/OAShoppingList'));

ngApp.get('/*', function (request, response) {
  response.sendFile(path.join(__dirname, '/dist/OAShoppingList/index.html'));
});

ngApp.listen(process.env.PORT || 8080);
