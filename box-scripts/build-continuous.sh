#!/usr/bin/env sh

set -ex # fail on first nonzero exit code and print currently executing command

cd /continuous
make build

# Copy built data to host machine
rm -rf /vagrant/build/continuous
mkdir -p /vagrant/build
cp -R stage /vagrant/build/continuous
