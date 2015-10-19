#!/bin/bash

confirm () {
    # call with a prompt string or use a default
    read -r -p "${1:-Are you sure? [y/N]} " response
    case $response in
        [yY][eE][sS]|[yY]) 
            true
            ;;
        *)
            false
            ;;
    esac
}

build () {
    npm run build:dist
    npm version patch
    git push
    npm publish
}

confirm "This will rebuild, version the application, and push to the git repo and npm registry. Are you sure? [y/N]" && build
