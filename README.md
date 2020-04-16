
# Corona Info Nepal

A web portal to display curated list of information (links, videos, graphics etc) related to [COVID-19](https://en.wikipedia.org/wiki/Covid-19) for creating awareness among people in Nepal.

[![Build Status](https://travis-ci.com/coronainfonepal/coronainfonepal.github.io.svg?branch=master)](https://travis-ci.com/coronainfonepal/coronainfonepal.github.io)

## Overview

This repository contains the code for the _CORONA INFO NEPAL_ website, [coronainfonepal.org](http://coronainfonepal.org).

The site is built using [Jekyll](https://jekyllrb.com/), a static site generator. If you want to get start with
Jekyll, there is nice [Quickstart](https://jekyllrb.com/docs/) in their official website. To learn more about
Jekyll you can try their [Step by Step Tutorial](https://jekyllrb.com/docs/step-by-step/01-setup/).

If you have comments or questions, you can reach by following ways:

* Email [budhram.gurung01@gmail.com](mailto:budhram.gurung01@gmail.com)
* Create an [issue](https://github.com/coronainfonepal/coronainfonepal.github.io/issues/new)
* Join the [Self-taught Engineers Slack channel](https://selftaughtengineers.slack.com) and ping `@brg` with your question. [Click here for self-invite](https://join.slack.com/t/selftaughtengineers/shared_invite/zt-dplbxefk-ke0VWOv9EeowFclV5wTM~g).

---

# Build & Run

## Pre-requisites

- Install [Git](https://git-scm.com/downloads).
- Install [Ruby](https://www.ruby-lang.org/en/documentation/installation/).
- Install [Bundler](http://bundler.io/) by running `gem install bundler`.

## Setting up and running the project

- Fork the repo
- Git clone the repo
  ```
  git clone https://github.com/<your-user-name>/coronainfonepal.github.io coronainfonepal.org
  ```

  Where
    - `your-user-name`: Your GitHub username

- Go into the cloned repo
  ```
  cd coronainfonepal.org
  ```

- Run `bundle install`
- Start the server as
  ```
  bundle exec jekyll serve
  ```
- Open the url [`http://localhost:4000`](http://localhost:4000) in your favorite browser
- Cheers!

# Roadmap

* [ ] Include success stories of donation effort like relief work etc
* [ ] Add other government related useful resources
* [ ] Write step by step tutorial for easy onboarding to project
* [ ] Add other categories of information and videos
* [x] Add basic support `Help Group` listing
* [x] Add CI for continuously checking PR
* [x] Basic test to check links through `html-proofer`
* [x] Add both English and Nepali language support
* [x] Add basic layout to show useful videos
* [x] Add basic layout to show useful information
* [x] Display stats for corona in Nepal and World

# Contributing

Welcome for any contribution.

# Author

[Budh Ram Gurung](https://freelancerbrg.com) - [`@coolbrg`](https://github.com/coolbrg)

# Community

Contributions, questions, and comments are all welcomed and encouraged!

Most of the developers hang out at [`Self-taught Engineers Slack channel`](https://selftaughtengineers.slack.com). Click here to [self-invite](https://join.slack.com/t/selftaughtengineers/shared_invite/zt-dplbxefk-ke0VWOv9EeowFclV5wTM~g) and join us in improving this portal better.

# License

The code and contents of this website are freely available under the [MIT License](https://raw.githubusercontent.com/coronainfonepal/coronainfonepal.github.io/master/LICENSE).
