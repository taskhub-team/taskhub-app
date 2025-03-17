#!/bin/bash
set -e  # Exit on first error

# Get inputs
VERSION=$1
STORAGE_ACCOUNT=$2
COMMIT_SHA=$3

echo "Uploading production build artifact to Azure Storage..."

# Create container if it doesn't exist
echo "Checking if container exists..."
az storage container exists --name builds --account-name $STORAGE_ACCOUNT --auth-mode login
if [ $? -ne 0 ]; then
  echo "Container doesn't exist, creating..."
  az storage container create --name builds --account-name $STORAGE_ACCOUNT --auth-mode login
fi

# Upload build artifact with version in filename
echo "Uploading build artifact..."
az storage blob upload \
  --container-name builds \
  --name "production/taskhub-v${VERSION}.zip" \
  --file taskhub-production-v${VERSION}.zip \
  --account-name $STORAGE_ACCOUNT \
  --auth-mode login

# Upload build info
echo "Uploading build info..."
az storage blob upload \
  --container-name builds \
  --name "production/build-info-v${VERSION}.txt" \
  --file build-info.txt \
  --account-name $STORAGE_ACCOUNT \
  --auth-mode login

# Tag as latest production build
echo "Creating latest reference..."
az storage blob copy start \
  --source-container builds \
  --source-blob "production/taskhub-v${VERSION}.zip" \
  --destination-container builds \
  --destination-blob "production/taskhub-latest.zip" \
  --account-name $STORAGE_ACCOUNT \
  --auth-mode login

echo "Artifact upload complete"
echo "{download_url}={https://${STORAGE_ACCOUNT}.blob.core.windows.net/builds/production/taskhub-latest.zip}"