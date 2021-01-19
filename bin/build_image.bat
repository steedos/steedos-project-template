::build 镜像并上传至docker hub
cd ../../

set IMAGE_VERSION="steedos/steedos-project-template:1.23.0-alpha.18"

docker rmi %IMAGE_VERSION%
echo "=> Building image..."; echo;
docker build --no-cache=true -t %IMAGE_VERSION% .

echo "=> Pushing image..."; echo;
docker push %IMAGE_VERSION%
echo "=> Done."; echo;

pause