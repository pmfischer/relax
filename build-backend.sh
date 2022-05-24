#!/usr/bin/bash

git checkout backend-development
sudo apt install node-pegjs node-typescript
rm relax.tar.gz
tsc
cp package-backend.json tmp/src/package.json
cd src/db/parser/
pegjs --cache --allowed-start-rules start,groupStart grammar_ra.pegjs
pegjs grammar_sql.pegjs
pegjs grammar_math.pegjs
cp *.js ../../../tmp/src/db/parser/
cd ../../..
cd tmp/src
tar czvf ../../relax.tar.gz .
cd ../..
