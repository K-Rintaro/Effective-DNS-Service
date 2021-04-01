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

//[example: web filtering black list]
const blacklist = ["www.example.com", "www.test.com", "aqua-and-pink.herokuapp.com"]

app.post('/dog', function(req, res, next) {
    const FQDN = req.body.fqdn;
    (async () => {
      const doh = require('@sagi.io/dns-over-https')
      const dnsResponse  = await doh.query({name: FQDN, hostname: '1dot1dot1dot1.cloudflare-dns.com'})
      const dnsip = dnsResponse.answers
      const kakunouko = []
      for (let i = 0; i < dnsip.length; i++){
          kakunouko.push({record: dnsip[i].type , addresss: dnsip[i].data});
      }
      if (blacklist.includes(FQDN) == false) {
        res.send(kakunouko);
        console.log(kakunouko);
      }else{
        res.status(403);
        res.send({code: 403, error: "EDS sever blocked DNS request because the FQDN was blacklisted."})
        console.log(403)
      }
    })()
});

app.post('/cat', function(req, res, next) {
  res.send('sample connection was successed!')
});