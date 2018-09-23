<image alt="gh-automerge" src="https://user-images.githubusercontent.com/1074042/45923303-9ab9b100-be97-11e8-8e67-674b972363f9.jpg" width="420" align="right" />

# GH-Automerge

[![CircleCI](https://circleci.com/gh/jonathanong/gh-automerge/tree/master.svg?style=svg&circle-token=d89466bafa3597afd2af10e1305ecac50a76958f)](https://circleci.com/gh/jonathanong/gh-automerge/tree/master)
[![NSP Status](https://nodesecurity.io/orgs/jonathanong/projects/90f33c5d-5d57-410c-9899-4e1e7b3a254a/badge)](https://nodesecurity.io/orgs/jonathanong/projects/90f33c5d-5d57-410c-9899-4e1e7b3a254a)
[![Greenkeeper badge](https://badges.greenkeeper.io/jonathanong/gh-automerge.svg)](https://greenkeeper.io/)

----

GH-Automerge is a cron bot that uses [CircleCi](http://circleci.com/) to automatically merge pull requests that pass CI.

----

**GH-Automerge automatically:**

- Merges the master into out-of-date pull request branches
- Merges pull requests when they're up-to-date and pass CI

----

## Usage

Using GH-Automerge is easy.
Once setup, enable automerging pull requests by adding a Github `AUTOMERGE` Label.
See the image above.

## Installation

GH-Automerge is built run as a cron job within CircleCi.

**To install:**

1. Create a repository
1. Run `npm install --save-dev gh-automerge`

## Setup

Setting up GH-Automerge can be done in 4 steps.

**Enabling GH-Automerge in CircleCI:**

1. Copy relevant code from this example [`.circleci/config.yml` template](.circleci/template.config.yml) into a repository
1. Enable CircleCI for the repository
1. Add  `GITHUB_TOKEN` and `GITHUB_ORG` env vars to your CircleCi config
   - `GITHUB_ORG` can be a Github Organization or User Name.
1. Add the Github label `AUTOMERGE` to your repository
