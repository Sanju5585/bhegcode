# !/bin/bash

#SET the hybris base folder path , to avoid replace in every line.

HYBRIS_INSTALLATION_PATH="/opt/app/hybris1811"
#commented as while doing a build on jenkins it will pull out the cpq jars

##CPQ_PATH="/opt/app/cpq"
#SET CPQ PATHS
CPQ_DATALOADER="${HYBRIS_INSTALLATION_PATH}/hybris/bin/ext-integration/sap/productconfig/sapproductconfigmodel/lib"

CPQ_RUNTIME="${HYBRIS_INSTALLATION_PATH}/hybris/bin/ext-integration/sap/productconfig/sapproductconfigruntimessc/lib"


echo "Hybris path : ${HYBRIS_INSTALLATION_PATH}"
##cp -R "${CPQ_PATH}"/*.jar "${CPQ_DATALOADER}" 
echo "CPQ DATALOADER jar from ${CPQ_PATH} copied to : ${CPQ_DATALOADER}"
##cp -R "${CPQ_PATH}"/*.jar "${CPQ_RUNTIME}"
echo "CPQ RUNTIME jar copied from ${CPQ_PATH} to : ${CPQ_RUNTIME}"
ls -l "${CPQ_RUNTIME}" 
ls -l "${CPQ_DATALOADER}"

pwd
cd "${HYBRIS_INSTALLATION_PATH}/hybris/bin/platform/"
echo "Stopping hybris server"
./hybrisserver.sh stop

cd "${HYBRIS_INSTALLATION_PATH}" 
cp local.properties "${HYBRIS_INSTALLATION_PATH}/hybris/config/local.properties"
cp localextensions.xml "${HYBRIS_INSTALLATION_PATH}/hybris/config/localextensions.xml"
#cp catalina.sh /opt/app/hybris63/hybris/bin/platform/tomcat/bin/catalina.sh

cd "${HYBRIS_INSTALLATION_PATH}/hybris/bin/platform/"
. ./setantenv.sh
echo "Running ANT production"
ant production
#mv /opt/app/hybris65/hybris/temp/hybris/hybrisServer/hybrisServer-AllExtensions.zip /opt/app/hybris65/hybris/backup/

rm -rf "${HYBRIS_INSTALLATION_PATH}/hybris/bin/custom"
cd "${HYBRIS_INSTALLATION_PATH}"
pwd
unzip -o hybrisServer-AllExtensions.zip

chmod -R 777 "${HYBRIS_INSTALLATION_PATH}/hybris/bin/custom/"

cd "${HYBRIS_INSTALLATION_PATH}/hybris/bin/platform/"
. ./setantenv.sh
echo "Performing ant clean all"
ant clean all
echo "starting hybris server"
./hybrisserver.sh start

exit
