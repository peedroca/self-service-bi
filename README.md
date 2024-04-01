# Self Service BI
Let's setup our local server with docker and dotnet to produces a place to explore data.

## Setup Enviroment

- OS: Ubuntu Server 23.10

We'll use docker for prepare our enviroment, if you don't have that, use below script:

```base
echo "Setup Docker"
sudo apt-get -y update
sudo apt-get -y install tree
sudo apt -y install docker.io

sudo systemctl start docker
sudo systemctl enable docker
```

### Building API images
First go to folder that has the API do you want build, and run:
```bash
docker build -t studentapi .
```
Finally run the below code to start your container with API:
```
docker run -d -p 8080:80 --name studentapi studentapi
```
