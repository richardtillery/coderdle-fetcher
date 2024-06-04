export HOST=$1 # coderdle-2.carcewp2x8m5.us-west-2.rds.amazonaws.com
export USER=$2 # admin
export PASS=$3
node -e 'import("./index.mjs").then(lm => lm.handler().then(response => console.log(response)))'