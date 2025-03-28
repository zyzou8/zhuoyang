#!/bin/bash

echo "Starting GitHub Pages deployment..."

# Remove previous builds
rm -rf .next out

# Set environment to production for correct path handling
export NODE_ENV=production

# Build the site
echo "Building site..."
npm run build

# Create .nojekyll file to bypass Jekyll processing
echo "Creating .nojekyll file..."
touch out/.nojekyll

# Deploy to GitHub Pages
echo "Deploying to GitHub Pages..."
npx gh-pages -d out -t true

echo "Deployment complete!"