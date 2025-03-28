#!/bin/bash

echo "Starting GitHub Pages deployment..."

# Remove previous builds
rm -rf .next out

# Build the site
echo "Building site..."
NEXT_PUBLIC_DEPLOY_ENV=production npm run build

# Create .nojekyll file to bypass Jekyll processing
echo "Creating .nojekyll file..."
touch out/.nojekyll

# Copy 404.html to handle client-side routing
echo "Setting up 404 handling..."
cp public/404.html out/404.html

# Deploy to GitHub Pages
echo "Deploying to GitHub Pages..."
npx gh-pages -d out -t true

echo "Deployment complete!"