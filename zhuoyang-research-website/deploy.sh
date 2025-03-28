#!/bin/bash

# Clean previous builds
rm -rf .next out

# Build and export the site
npm run build

# Ensure styles are copied to out directory
mkdir -p out/_next/static/css
cp .next/static/css/* out/_next/static/css/

# Deploy to GitHub Pages
npx gh-pages -d out -t true