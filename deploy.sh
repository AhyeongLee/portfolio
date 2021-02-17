#!/bin/bash
PID=`ps -ef | grep 'node server.js' | grep -v grep | awk '{print \$2}'`
if [[ ${PID} -eq "" ]]
then
    echo "none"
else
    kill -9 ${PID}
    npm install --only=prod
    node server.js &
fi
