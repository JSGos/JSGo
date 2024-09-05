#!/bin/bash

python3 getRefInput.py --spec /Apps/parse-server/spec --source_file /Apps/parse-server/lib/Controllers/DatabaseController.js --line 255 --program_path /Apps/parse-server
python3 ins_helper.py 255
python getRefTraceAligned.py /Apps/parse-server 255 # Adjust this to the new sink location of your instrumented code
