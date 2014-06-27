#!/usr/bin/env sh

set -ex

apt-get update
apt-get install -y git nodejs npm nodejs-legacy gcc-arm-none-eabi gyp ninja-build

git clone https://github.com/tessel/continuous /continuous
