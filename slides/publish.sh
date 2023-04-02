#!/usr/bin/env bash

latexmk
./export.sh
cp out/*.pdf ../src/static/lectures/
