#!/bin/bash
# Check npm and Node.js versions
npm -v
node -v

# Update npm
npm install -g npm@latest

# Clear npm cache
npm cache clean --force

# Remove node_modules and package-lock.json, then reinstall
rm -rf node_modules package-lock.json
npm install

# Fix vulnerabilities
npm audit fix
