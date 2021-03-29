# Effective-DNS-Service (EDS)
The new model of DNS(Domain Name System) that can use normal web server.

## What's this?
Original DNS has a problem that data is used as plain text, and there are some ways to encrypt like DNS over HTTPS.

Also, DNS over HTTPS has a problem that it is impossible to set parental controls and so on.

This service is the new model that can connect to DNS server through normal web server.

In this service, we can use normal web server as connection server with DNS, so it is very efficient.

## Why does EDS work on the Internet?
We can encrypt DNS query by HTTPS.

It is difficult to intercept DNS query because the way between client and EDS is encrypted by HTTPS, and the way between EDS and DNS is encrypted by HTTPS, too.

I suppose that the organization which manage the EDS certify some servers as "safety EDS", and these servers are set default EDS server at browser.

Users can create other EDS servers freely, and they can set them as "third-party EDS".

## Routing naming convention

|  Route  |      Intent     |
|  ----   |      -----      |
|  /dog   |   EDS Connect   |
|  /cat   |  Sample Connect |

## LICENSE
EDS is licensed under the MIT license. Please check LICENSE.



