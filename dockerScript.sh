#!/bin/sh
echo "APP_TYPE Defined:" $APP_TYPE
if [[ "${APP_TYPE}" == "worker" ]] ;then
  echo "Running worker"
  # dumb-init node ace bull:listen # some issue to load template while sending email so that worker instance is same as server, just not pointing to ELB
  dumb-init node server.js
else
  echo "Running server"
  node ace migration:run --force
  dumb-init node server.js
fi