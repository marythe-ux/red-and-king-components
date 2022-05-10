branch=$(git branch --show-current)

if [ $branch != "develop" && $branch != "main" && $branch != "gh-pages" && $branch != "design-tokens" ]; then
    for command in "$@"; do
        $command
    done
fi
