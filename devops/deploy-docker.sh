#!/usr/bin/env bash

docker build ../docker-monitor-tester/web/. -t nicom93/dockmon-tester
#docker build ../docker-monitor-tester/simulator/. -t nicom93/dockmon-tester-simulator
#docker build ../docker-monitor-server/. -t nicom93/dockmon-server
#docker build ../docker-monitor-client-angular5/. -t nicom93/dockmon-client
#docker build ../docker-monitor-anomaly-detector/. -t nicom93/dockmon-anomaly-detector
docker push nicom93/dockmon-tester
#docker push nicom93/dockmon-tester-simulator
#docker push nicom93/dockmon-server
#docker push nicom93/dockmon-client
#docker push nicom93/dockmon-anomaly-detector