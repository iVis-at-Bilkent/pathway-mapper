#!/bin/bash
FILES=./samples/*
for f in $FILES
do
	# echo "Processing $f file..."	
	# take action on each file. $f store current file name
	# cat $f
	# echo "\"$f\": " | cat - $f > temp && mv temp $f
	cat $f >> "pathways.json"
done

