git add .
git commit -m "Adding files..."
git checkout gh-pages
git merge master
git push -v --all origin
git checkout master

