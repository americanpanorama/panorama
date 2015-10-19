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
	npm run build:examples
	./node_modules/.bin/git-directory-deploy --directory examples/public
}

confirm "This will rebuild and deploy the examples page. Are you sure? [y/N]" && build
