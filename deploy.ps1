# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
New-Item .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git remote add origin https://www.github.com/buonotti/bus-stats.git
git checkout -B gh-pages
git add -A
git commit -m 'deploy'
git push --set-upstream origin gh-pages

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

cd ..