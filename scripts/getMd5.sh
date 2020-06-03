#!/bin/bash

getMd5(){
if [ "$1" == "" ];then
   echo "none"
 else
   first=`md5 -s $1 | tr [:lower:] [:upper:] | awk '{print $4}'`
   second=`md5 -s $first | tr [:lower:] [:upper:] | awk '{print $4}'`
   echo $second
 fi
}

getMd5 $1
