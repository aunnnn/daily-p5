#!/bin/bash

FILECOUNT=$(find ./sketches/ -type f | wc -l | tr -d ' ')
cp ./sketches/dN.js "./sketches/d${FILECOUNT}.js"
echo "d${FILECOUNT}.js is created."
