#!/usr/bin/env bash

BASE="$(dirname $(pwd))"

JQ="$BASE/jq"
AUTHCODE_LOCATION="$BASE/deploy/deploy_code"
DEPLOY_ROOT="$BASE/deploy"
OUTPUT="$BASE/WWW"

printf "Content-Type: text/plain\r\n";
printf "\r\n";

if [[ -z "$HTTP_X_AUTH_CODE" ]]; then
  printf "Auth code must be provided\r\n";
  exit 1;
fi

if [[ "$HTTP_X_AUTH_CODE" != "$(cat $AUTHCODE_LOCATION)" ]]; then
  printf "Unauthorized\r\n";
  exit 1;
fi

if [[ -z "$HTTP_X_URL" ]]; then
  printf "Must provide download URL\r\n";
  exit 1;
fi

# Read all stdin and echo back
cat

echo "Downloading from $HTTP_X_URL ..."
curl -Lo "$DEPLOY_ROOT/deploy.zip" "$HTTP_X_URL" 2>&1

mkdir -p "$DEPLOY_ROOT/deploy_unzip"
unzip "$DEPLOY_ROOT/deploy.zip" -d "$DEPLOY_ROOT/deploy_unzip" 2>&1 && \
  rsync -avc --delete "$DEPLOY_ROOT/deploy_unzip/" "$OUTPUT/" 2>&1;

if [[ $? -ne 0 ]]; then
  printf "Failed\r\n";
  exit 1;
fi

rm -rf "$DEPLOY_ROOT/deploy_unzip" "$DEPLOY_ROOT/deploy.zip";


printf "Deployed\r\n";
exit 0


#### TO SET UP
# Make sure to add write permissions to the CGI script for WWW
# fs setacl $OUTPUT -acl class-cs45-1236.cgi rlidwk
# Make sure these permissions are set for subdirectories as well.
# Additionally, make sure $AUTHCODE_LOCATION is readable.
