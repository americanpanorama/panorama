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
    # rebuild dist and commit to clean git working directory
    npm run build:dist
    git add .
    git commit -m "Rebuild dist for npm version update"

    # create a version update commit
    npm version patch

    # squash the dist rebuild and version update commits
    git reset --hard HEAD~2
    git merge --squash HEAD@{1}
    git commit

    # push the squashed commit
    git push

    # publish the new version to npm
    npm publish
}

confirm "This will rebuild, version the application, and push to the git repo and npm registry. Are you sure? [y/N]" && build
