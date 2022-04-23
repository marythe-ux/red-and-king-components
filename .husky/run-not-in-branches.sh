branch=$(git branch --show-current)

if [ $branch != "develop" && $branch != "main" && $branch != "gh-pages" ]; then
    for command in "$@"; do
        $command
    done
fi
