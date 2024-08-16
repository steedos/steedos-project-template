#!/bin/bash

ROOT_URL=$(printf 'https://%s-%s.app.github.dev' $CODESPACE_NAME 5000)

echo "ROOT_URL=$ROOT_URL" >> steedos-platform-nodejs/.env.local
