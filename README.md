# Coderdle Fetcher Lambda

To run:
npm run test coderdle-2.carcewp2x8m5.us-west-2.rds.amazonaws.com admin <password>

To upload:
zip coderdle-fetcher.zip index.mjs
aws lambda update-function-code --function-name coderdle-fetcher --zip-file fileb://coderdle-fetcher.zip
