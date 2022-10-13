# build
npm run build
git add dist -f
git commit -m 'deploy'
git pull
git subtree push --prefix dist origin gh-pages