#!/usr/bin/env bash
PATH=/usr/local/sbin:/usr/sbin:/usr/bin:/sbin:/bin:/home/ivis/.nvm/versions/node/v15.14.0/bin:/home/ivis/pathwayMapper/pathway-mapper

#Seperator
echo -e "\n--------------" >> /home/ivis/pathwayMapper/pathway-mapper/rebuild.log

#Logging rebuild time
date >> /home/ivis/pathwayMapper/pathway-mapper/rebuild.log

#Fix dubious ownership problem
git config --global --add safe.directory /home/ivis/pathwayMapper/pathway-mapper

#update PM
echo -e "\nUpdating PathwayMapper..." &>> /home/ivis/pathwayMapper/pathway-mapper/rebuild.log
git fetch --all &>> /home/ivis/pathwayMapper/pathway-mapper/rebuild.log
git reset --hard origin/unstable &>> /home/ivis/pathwayMapper/pathway-mapper/rebuild.log

#update npm packages
echo -e "\nUpdating npm packages..." &>> /home/ivis/pathwayMapper/pathway-mapper/rebuild.log
yarn install

#start
echo -e "\nBuilding PM..." &>> /home/ivis/pathwayMapper/pathway-mapper/rebuild.log
yarn buildLib:prod && yarn buildApp:prod

echo -e "\nDone!" &>> /home/ivis/pathwayMapper/pathway-mapper/rebuild.log
