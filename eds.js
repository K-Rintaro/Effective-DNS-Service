const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const helmet = require('helmet')

const port = process.env.PORT || 3000;

app.use(helmet())
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.listen(port, ()=> {
  console.log(`EDS listening on port ${port}!`);
});

app.post('/dog', function(req, res, next) {
    const FQDN = req.body.fqdn;
    (async () => {
      const doh = require('@sagi.io/dns-over-https')
      const dnsResponse  = await doh.query({name: FQDN})
      const dnsip = dnsResponse.answers
      const kakunouko = []
      for (let i = 0; i < dnsip.length; i++){
        if (dnsip[i].type === "A" || dnsip[i].type === "AAAA"){
          kakunouko.push(dnsip[i].data);
        }
      }
      res.send(kakunouko);
      console.log(kakunouko);
    })()
});

app.post('/cat', function(req, res, next) {
  const FQDN = req.body.fqdn;
  dns.lookup(FQDN, function (err, addresses, family) {
      res.send('sample connection was successed!')
  });
});
