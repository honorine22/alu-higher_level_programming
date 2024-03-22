#!/bin/bash

# Check if curl is available
if ! command -v curl &> /dev/null; then
  echo "Error: curl is not installed."
  exit 1
fi

# Get the URL from the first argument
url="$1"

# Check if a URL is provided
if [ -z "$url" ]; then
  echo "Error: Please provide a URL as an argument."
  exit 1
fi

# Use curl to get the response size
size=$(curl -s -o /dev/null -w %{size_download} "$url:5000")

# Check if curl command was successful
if [ $? -ne 0 ]; then
  echo "Error: Failed to retrieve response from $url:5000"
  exit 1
fi

# Display the size in bytes
echo "Response size: $size bytes"
