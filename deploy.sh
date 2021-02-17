#!/bin/bash
kill -9 `ps -ef | grep server.js | grep -v grep | awk '{print \$2}'`
npm install --only=prod
node server.js &