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

app.post('/dog', function(req, res) {
    const FQDN = req.body.fqdn;
    (async () => {
      const doh = require('@sagi.io/dns-over-https')
      const dnsResponse  = await doh.query({name: FQDN, hostname: 'https://dns.google/dns-query'})
      const dnsip = dnsResponse.answers
      const kakunouko = []
      for (let i = 0; i < dnsip.length; i++){
          kakunouko.push({record: dnsip[i].type , addresss: dnsip[i].data});
      }
        res.send(kakunouko);
        console.log(kakunouko);
    })()
});

app.post('/cat', function(req, res) {
  res.send('sample connection was successed!')
});
