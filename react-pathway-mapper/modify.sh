#!/bin/bash
FILES=./samples/*
for f in $FILES
do
	# echo "Processing $f file..."
	# take action on each file. $f store current file name
	# cat $f
	# echo "\"$f\": \"" | cat - $f > temp && mv temp $f
	# cat "end.txt" >> $f

  echo "\"$f\": [" >> pathways.json
  all_lines=`cat $f`

  while IFS= read -r line
  do
    echo "\"$line\"," >> pathways.json

  done < "$f"

  echo "]," >> pathways.json

done

# f= "Cell-Cycle.txt"
