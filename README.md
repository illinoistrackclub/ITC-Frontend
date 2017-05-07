# ITC Frontend [![Build Status](https://travis-ci.org/mkreiser/ITC-Frontend.svg?branch=master)](https://travis-ci.org/mkreiser/ITC-Frontend) [![Coverage Status](https://coveralls.io/repos/github/mkreiser/ITC-Frontend/badge.svg?branch=master)](https://coveralls.io/github/mkreiser/ITC-Frontend?branch=master)

This is the frontend of the Illinois Track Club website.

## Commands

### Running the site locally

    grunt serve

### Running the test locally

    grunt test

### Build the production version of the site

    grunt build


## Dev Stuff

## Dev Rules

1. Don't push to master

2. DON'T PUSH TO MASTER

3. Always create a new branch for a new task. Dev on this branch, create a PR, and merge in from that PR.

4. Always create a pull request and undergo code review

5. DON'T PUSH TO MASTER

## Dependencies

* [Node.js](https://nodejs.org/en/download/)

* npm (Included with Node.js)

* bower (Run `npm install bower -g` after installing Node.js/npm)

* [Ruby](http://rubyinstaller.org/downloads/)

## Dev environment setup

1. Install Node.js, bower, and npm

2. Ensure that you can run `node`, `bower`, and `npm` commands from the command line

3. `gem update --system && gem install compass` after installing Ruby

4. Clone the repo

5. Run `npm install && bower install` at the root directory of the repo

6. Run `grunt serve` to load the site into browser. Livereload is enabled, so any changes will automatically reload in the browser. Once you can run the site locally, you should be good to go.

## Updating the frontend

1. Make sure you are up to date with current site (`git pull`)

2. `git checkout -b new-branch-name`

3. Make your changes, using `grunt serve` to watch your changes. Ensure that they work with the backend if updating the news or results page (Run the backend server locally. Frontend automatically will point to it).

4. Run `grunt test` to confirm you did not break anything

5. Run `grunt build` AFTER YOU HAVE CONFIRMED NOTHING IS BROKEN. This builds the site for production in the `dist` folder.

6. Run `git status` to ensure the `dist` site was built and only the changes you made are included.

7. Run `git add .` or `git add path/to/file` to include files in the git commit.

8. Run `git commit -m "meaningful message"` to create your commit. Make sure you are commiting to the branch you created. You can check before by running `git branch`.

9. Push the branch to GitHub with: `git push origin new-branch-name`. The branch should now be available on the GitHub website.

10. Go to the repo on GitHub and create a pull request for the branch. Confirm the changes are as expected on the website. After all of the tests have passed, merge the branch and delete the branch on GitHub. IF THE TESTS DON'T PASS, GO BACK TO STEP 3 AND FIX YOUR MISTAKES.

11. Back in the local terminal, run `git checkout master` and `git pull origin master`

12. After that branch is up to date, run `git branch -d new-branch-name` to remove the local version of the branch you just merged. `git branch` should now only show the master branch and any other branches you may have. Always delete old/stale branches to avoid confusion.

13. Run `git subtree push --prefix dist origin gh-pages` to push the changes to the live site.

14. Confirm everything works on the live site. It usually takes 5 minutes or less for the new code to appear on the live site.
