#!/usr/bin/env sh

set -ex # fail on first nonzero exit code and print currently executing command

cd /continuous
make clean
make build-cli

# Copy built data to host machine
rm -rf /vagrant/build/cli
mkdir -p /vagrant/build/cli
cp -R build-cli/stage/tessel-cli.tar.gz /vagrant/build/cli
