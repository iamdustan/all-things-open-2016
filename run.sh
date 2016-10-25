#!/bin/bash

if [ ! -n "$1" ]
then
  echo "Usage: `basename $0` [type]"
  exit $E_BADARGS
elif [ "web" = "$1" ]; then
  pushd ./01-web;
  npm start;
  popd;
elif [ "native" = "$1" ]; then
  pushd ./02-native;
  if [ "android" = "$1" ]
  then
    react-native run-ios
  else
    react-native run-ios
  fi
  popd;
elif [ "blessed" = "$1" ]; then
  pushd ./03-blessed;
  npm start
  popd;
elif [ "x11" = "$1" ]; then
  pushd ./04-x11;
  npm start
  popd;
elif [ "music" = "$1" ]; then
  pushd ./05-music;
  npm start
  popd;
elif [ "3d" = "$1" ]; then
  pushd ./06-3d;
  npm start
  popd;
elif [ "aframe" = "$1" ] || [ "vr" = "$1" ]; then
  pushd ./07-aframe;
  npm start
  popd;
elif [ "hardware" = "$1" ]; then
  pushd ./08-hardware;
  npm start
  popd;
else
  echo "ERROR! Unknown demo provided"
  exit 1
fi

