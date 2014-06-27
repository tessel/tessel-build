#!/usr/bin/env sh

set -ex # fail on first nonzero exit code and print currently executing command

cd /continuous
make clean
make build-firmware

# Copy built data to host machine
rm -rf /vagrant/build/firmware
mkdir -p /vagrant/build
cp -R build-firmware/stage/firmware/out /vagrant/build/firmware
