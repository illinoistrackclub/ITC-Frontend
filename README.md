# ITC Frontend [![Build Status](https://travis-ci.org/mkreiser/ITC-Frontend.svg?branch=master)](https://travis-ci.org/mkreiser/ITC-Frontend) [![Coverage Status](https://coveralls.io/repos/github/mkreiser/ITC-Frontend/badge.svg?branch=master)](https://coveralls.io/github/mkreiser/ITC-Frontend?branch=master)

This is the frontend of the Illinois Track Club website

## Development Rules

1. Don't push to master

2. DON'T PUSH TO MASTER

3. Always create a new branch for a new task

4. Always create a pull request and undergo code review

5. DON'T PUSH TO MASTER

## Dependencies

* [Node.js](https://nodejs.org/en/download/)

* bower (Run `npm install bower -g` after installing Node.js/npm)

* npm (Included with Node.js)

* [Ruby](http://rubyinstaller.org/downloads/)

## Dev environment setup

1. Install Node.js, bower, and npm

2. Ensure that you can run `node`, `bower`, and `npm` commands from the command line

3. `gem update --system && gem install compass` after installing Ruby

4. Clone the repo

5. Run `npm install && bower install` at the root directory

6. Run `grunt serve` to load the site into browser. Livereload is enabled, so any changes will automatically reload in the browser.

## Updating site

1. Make sure you are up to date with current site (git pull)

2. `git checkout -b new-branch-name`

3. Make your changes

4. Run `grunt serve` to manually check your changes (note, db cannot be accessed from localhost so news and results will never populate)

5. Run `grunt test` to confirm you did not break anything

6. Run `grunt build` AFTER YOU HAVE CONFIRMED NOTHING IS BROKEN

7. Run `git status` to see what changes have been made. "dist" is the file created when using `grunt build` and NEEDS to be included in your add

8. If this is correct, `git add .` or `git add path/to/file`

9. Run `git commit -m "meaningful message"`

10. `git push origin new-branch-name`

11. Go to the repo on github and pull request from the branch. After all of the tests have passed, confirm the merge and delete the old branch. IF THE TESTS DON'T PASS, GO BACK TO STEP 3 AND FIX YOUR MISTAKES

12. Back in the terminal, run `git checkout master` and `git pull origin master`

13. After that branch is up to date, run `git branch -D new-branch-name` to remove the local version of that branch. `git branch` should now only show the master branch

14. Run `git subtree push --prefix dist origin gh-pages` to push the changes to the live site
