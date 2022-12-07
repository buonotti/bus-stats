#!/bin/sh
git fetch
git pull
npm run build
if [ $? -ne 0 ]; then
  echo "Build failed"
  exit 1
fi
firebase deploy