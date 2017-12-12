# README

RideBot is an app to search and store recipes. Built with the following:

Ruby v. 2.3.3
Rails v. 5.1.2
React v 16.0.0 (using webpacker)
React Router v. 3.0.2
PostgreSQL

## Getting Started
Run the following commands in terminal. (This app uses webpacker, which requires yarn. If you do not have yarn installed, run `$ brew install yarn`)
```
$ git clone git@github.com/jtbirney/ride-bot.git
$ bundle install
$ rake db:create
$ rake db:migrate
$ rails server
```
And in a separate tab
```
$ yarn install
$ yarn start
```

## Key Features

## Test suite
Ruby testing using RSpec. Run with `$ rake`

React testing using Karma/Jasmine/Enzyme. Run with `$ karma start`
