const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dns = require('dns');

const port = 3000

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.listen(port, ()=> {
  console.log(`Example app listening on port ${port}!`);
});

app.post('/dog', function(req, res, next) {
    const FQDN = req.body.fqdn;
    dns.lookup(FQDN, function (err, addresses, family) {
        console.log(addresses);
        res.send(addresses)
    });
});