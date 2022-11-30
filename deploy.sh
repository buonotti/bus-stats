#!/bin/sh
git fetch
git pull
npm run build
firebase deploy