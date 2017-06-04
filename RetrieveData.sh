#!/bin/bash
echo 'window.KnightlyData = (' > data.js;
curl "http://knightly.jetru.by/api/public/v1/positions?key=z7JA799689sdh2G7suy8OJJ4ueHsA2o8&from=$(date --date='7 days ago' '+%Y-%m-%d')&to$(date '+%Y-%m-%d')" >> data.js;
echo ');' >> data.js;
