#!/bin/bash
set -e

# Get inputs
ENV_NAME=$1
TIMESTAMP=$2
STORAGE_ACCOUNT=$3
COMMIT_SHA=$4

echo "Uploading preview environment build artifact to Azure Storage..."

# Create container if it doesn't exist
echo "Checking if container exists..."
az storage container exists --name builds --account-name $STORAGE_ACCOUNT --auth-mode login
if [ $? -ne 0 ]; then
  echo "Container doesn't exist, creating..."
  az storage container create --name builds --account-name $STORAGE_ACCOUNT --auth-mode login
fi

# Upload build artifact
echo "Uploading build artifact..."
az storage blob upload \
  --container-name builds \
  --name "${ENV_NAME}/taskhub-${ENV_NAME}-${TIMESTAMP}.zip" \
  --file taskhub-${ENV_NAME}-${TIMESTAMP}.zip \
  --account-name $STORAGE_ACCOUNT \
  --auth-mode login

# Upload build info
echo "Uploading build info..."
az storage blob upload \
  --container-name builds \
  --name "${ENV_NAME}/build-info-${TIMESTAMP}.txt" \
  --file build-info.txt \
  --account-name $STORAGE_ACCOUNT \
  --auth-mode login

# Tag as latest for this preview environment
echo "Creating latest reference..."
az storage blob copy start \
  --source-container builds \
  --source-blob "${ENV_NAME}/taskhub-${ENV_NAME}-${TIMESTAMP}.zip" \
  --destination-container builds \
  --destination-blob "${ENV_NAME}/taskhub-latest.zip" \
  --account-name $STORAGE_ACCOUNT \
  --auth-mode login

echo "Artifact upload complete"
echo "{download_url}={https://${STORAGE_ACCOUNT}.blob.core.windows.net/builds/${ENV_NAME}/taskhub-latest.zip}"