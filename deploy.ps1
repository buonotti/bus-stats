# build
npm run build
git add -f dist/
git commit -m "deploy"

git subtree push --prefix dist origin gh-pages