#!/usr/bin/env bash

AUTHCODE_LOCATION="/afs/.ir/class/cs45/deploy/deploy_code"
DEPLOY_TMP="/afs/.ir/class/cs45/deploy/deploy.tar.gz"
UNTAR_TMP="/afs/.ir/class/cs45/deploy/untar"
OUTPUT="/afs/.ir/class/cs45/WWW"

printf "Content-Type: text/plain\r\n";
printf "\r\n";

printf "$(pwd)\r\n";
printf "$USER\r\n";

if [[ -z "$HTTP_X_AUTH_CODE" ]]; then
  printf "Auth code must be provided\r\n";
  exit 1;
fi

if [[ "$HTTP_X_AUTH_CODE" != "$(cat $AUTHCODE_LOCATION)" ]]; then
  printf "Unauthorized\r\n";
  exit 1;
fi

if [[ -z "$CONTENT_LENGTH" ]]; then
  printf "Must provide endpoint\r\n";
  exit 1;
fi


ARTIFACT_ID="$(cat)"

curl \
  -Lo "$DEPLOY_TMP" \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  "https://api.github.com/repos/stanford-cs45/stanford-cs45.github.io/actions/artifacts/$ARTIFACT_ID" && \
  tar -zxvf "$DEPLOY_TMP" "$UNTAR_TMP" && \
  rsync -a --delete "$UNTAR_TMP/" "$OUTPUT/" && \
  rm -rf "$DEPLOY_TMP" "$UNTAR_TMP";

if [[ $? -ne 0 ]]; then
  rm -rf "$DEPLOY_TMP" "$UNTAR_TMP";
  printf "Failed\r\n";
  exit 1;
fi

printf "Deployed\r\n";
exit 0