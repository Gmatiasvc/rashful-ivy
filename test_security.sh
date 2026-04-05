#!/bin/bash
# Check for basic security things

echo "--- Checking package.json for known vulnerabilities in deps ---"
npm audit

echo "--- Checking for hardcoded secrets ---"
grep -rnw -E -i "password|secret|api_key|token|auth" "src"

echo "--- Checking headers in index.html ---"
cat index.html | grep -i "meta"

echo "--- Done ---"
