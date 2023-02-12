#!/usr/bin/env bash

JQ="/afs/.ir/class/cs45/jq"
AUTHCODE_LOCATION="/afs/.ir/class/cs45/deploy/deploy_code"
DEPLOY_ROOT="/afs/.ir/class/cs45/deploy"
OUTPUT="/afs/.ir/class/cs45/WWW"

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

if [[ -z "$CONTENT_LENGTH" ]]; then
  printf "Must provide auth token\r\n";
  exit 1;
fi

AUTH_TOKEN="$(cat)"
DOWNLOAD_URL="$(curl -H "Accept: application/vnd.github+json" -H "Authorization: Bearer $AUTH_TOKEN" -H "X-GitHub-Api-Version: 2022-11-28" https://api.github.com/repos/stanford-cs45/stanford-cs45.github.io/actions/artifacts | $JQ -r '.artifacts | sort_by(.created_at) | .[] | select(.name == "deploy.tar.gz")' | $JQ -rs '.[-1] | .archive_download_url')"
curl -Lo "$DEPLOY_ROOT/deploy.zip" -H "Accept: application/vnd.github+json" -H "Authorization: Bearer $AUTH_TOKEN" -H "X-GitHub-Api-Version: 2022-11-28" "$DOWNLOAD_URL" 2>&1
unzip "$DEPLOY_ROOT/deploy.zip" -d "$DEPLOY_ROOT" 2>&1


mkdir -p "$DEPLOY_ROOT/deploy_untar"
tar -zxvf "$DEPLOY_ROOT/deploy.tar.gz" -C "$DEPLOY_ROOT/deploy_untar" 2>&1 && \
  rsync -a --delete "$DEPLOY_ROOT/deploy_untar/" "$OUTPUT/" 2>&1;

if [[ $? -ne 0 ]]; then
  printf "Failed\r\n";
  exit 1;
fi

rm -rf "$DEPLOY_ROOT/deploy_untar" "$DEPLOY_ROOT/deploy.tar.gz" "$DEPLOY_ROOT/deploy.zip";


printf "Deployed\r\n";
exit 0


#### TO SET UP
# Make sure to add write permissions to the CGI script for WWW
# fs setacl $OUTPUT -acl class-cs45-1234.cgi rlidwk
# Make sure these permissions are set for subdirectories as well.