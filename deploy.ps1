# build
npm run build
git add dist -f
git commit -m 'deploy'
git subtree split --prefix dist main

# Then run the following command with the resulting hash
# git push origin <id>:gh-pages --force