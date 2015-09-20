#!/bin/sh

x=$(mongo localhost:27017 --eval "var a=12345" file.js)
#y=""
#echo $x | grep -o "problem"
#echo "y is $y"
echo $x
if [[ $x == *"problem"* ]]
then

  echo "here"
else
  echo "not here"
fi
