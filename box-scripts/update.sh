#!/usr/bin/env sh

set -ex # fail on first nonzero exit code and print currently executing command

apt-get update
apt-get dist-upgrade -y

cd /continuous
git fetch origin && git reset --hard origin/master
