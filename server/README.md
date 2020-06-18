

kubectl run -i --tty ubuntu --image=ubuntu --restart=Never

- Step 1: docker with just server.js, run the node app
cd server
docker build -t moogah/wth_server .
docker container run -p 8080:8080  moogah/wth_server
❯ curl localhost:8080
Server is OK%

docker login
docker push moogah/wth_server:latest

❯ helm list
NAME	NAMESPACE	REVISION	UPDATED	STATUS	CHART	APP VERSION




- Step 2: blank helm chart through to NodePort deployed nodejs app
helm create helm-chart

-- highlight `image` section and `service` section, peek at templates
helm install helm-chart --generate-name

-- run kubectl commands to see pods and services
kubectl describe pods
kubectl describe services

kubectl run -it --rm --restart=Never alpine --image=alpine sh (from https://kubernetes.io/docs/tasks/debug-application-cluster/debug-service/)
wget -O- helm-chart-1592441184:8080

-- run container to wget -O- service-name




- Step 3: add client.js and use docker-compose to build and run 
- Step 4: split `image` section into client and server to deploy
-- use kubectl and container to explore
- Step 5: split service into backend-service (ClusterIP) and frontend-service (NodePort)