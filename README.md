<image alt="gh-automerge" src="https://user-images.githubusercontent.com/1074042/45923303-9ab9b100-be97-11e8-8e67-674b972363f9.jpg" width="420" align="right" />

# GH-Automerge

[![CircleCI](https://circleci.com/gh/jonathanong/gh-automerge/tree/master.svg?style=svg&circle-token=d89466bafa3597afd2af10e1305ecac50a76958f)](https://circleci.com/gh/jonathanong/gh-automerge/tree/master)
[![NSP Status](https://nodesecurity.io/orgs/jonathanong/projects/90f33c5d-5d57-410c-9899-4e1e7b3a254a/badge)](https://nodesecurity.io/orgs/jonathanong/projects/90f33c5d-5d57-410c-9899-4e1e7b3a254a)
[![Greenkeeper badge](https://badges.greenkeeper.io/jonathanong/gh-automerge.svg)](https://greenkeeper.io/)

----

GH-Automerge is a cron bot that uses [CircleCi](http://circleci.com/) to automatically merge pull requests that pass CI.

----

#### GH-Automerge automatically

- Merges the master into out-of-date pull request branches
- Merges pull requests when they're up-to-date and pass CI

----

#### Usage

Using GH-Automerge is easy.
Once setup, enable automerging pull requests by adding a Github `AUTOMERGE` Label.
See the image above.

----

#### Setup

Setting up GH-Automerge for a repository in with these steps.

- Create a repository
- Install, `npm install --save-dev gh-automerge`
- Copy cron config from this [`.circleci/config.yml` template](.circleci/template.config.yml) into your repository
- Enable your repository in CircleCi
- Add a `GITHUB_TOKEN` env var in CircleCi
- Add a `GITHUB_ORG` env var in CircleCi (the `GITHUB_ORG` can be a Github Organization or your Github User Name).
- Add the Github label `AUTOMERGE` to your repository
