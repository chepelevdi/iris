if [ -z "$(git status --porcelain)" ]; then

  echo "Preparing to deploy to Github Pages..."
  rm -rf build-styleguide

  echo "Building Storybook..."
  yarn build-styleguide
  UPDATE_BRANCH=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
  git status

  echo "Switching to gh-pages branch..."
  git checkout gh-pages
  git pull
  rm -rf $UPDATE_BRANCH
  mv build-styleguide $UPDATE_BRANCH
  git add .
  git commit -nam "UPDATE: $UPDATE_BRANCH"

  echo "Pushing change to $UPDATE_BRANCH..."
  git push
  git checkout $UPDATE_BRANCH

  echo "Done!"
  git status
    
else 
  echo "Uncommitted git changes! Deploy failed."

fi