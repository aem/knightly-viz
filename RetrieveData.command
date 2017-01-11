#!/usr/bin/bash
echo 'window.KnightlyData = (' > data.js;
curl 'http://knightly.jetru.by/api/public/v1/positions?key=z7JA799689sdh2G7suy8OJJ4ueHsA2o8&from=2016-12-12' >> data.js | /dev/null;
echo ');' >> data.js;
open ./index.html;
