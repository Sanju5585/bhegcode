#!/bin/bash

pwd
cd /opt/app/hybris65/hybris/bin/platform/
./hybrisserver.sh stop

cd /opt/app/hybris65/
cp local.properties /opt/app/hybris65/hybris/config/local.properties
cp localextensions.xml /opt/app/hybris65/hybris/config/localextensions.xml
cp wrapper.conf /opt/app/hybris65/hybris/GEEDGE_CI/
cp catalina.sh /opt/app/hybris65/hybris/GEEDGE_CI/


cd /opt/app/hybris65/hybris/bin/platform/
. ./setantenv.sh
ant production
#mv /opt/app/hybris65/hybris/temp/hybris/hybrisServer/hybrisServer-AllExtensions.zip /opt/app/hybris65/hybris/backup/

rm -rf /opt/app/hybris65/hybris/bin/custom
cd /opt/app/hybris65/
pwd
unzip -o hybrisServer-AllExtensions.zip


cd /opt/app/hybris65/hybris/bin/platform/
. ./setantenv.sh
ant clean all
cp /opt/app/hybris65/hybris/GEEDGE_CI/catalina.sh /opt/app/hybris65/hybris/bin/platform/tomcat/bin/
cp /opt/app/hybris65/hybris/GEEDGE_CI/wrapper.conf /opt/app/hybris65/hybris/bin/platform/tomcat/conf/
./hybrisserver.sh start

exit
