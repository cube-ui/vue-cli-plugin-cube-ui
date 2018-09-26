#!/bin/bash

if [ -z "$1" ]
then
  type='patch'
else
  type=$1
fi

npm version $type -m '[release] npm: @%s' && npm publish && git push
