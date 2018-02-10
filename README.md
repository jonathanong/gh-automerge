# GH-Automerge

[![CircleCI](https://circleci.com/gh/jonathanong/gh-automerge/tree/master.svg?style=svg&circle-token=d89466bafa3597afd2af10e1305ecac50a76958f)](https://circleci.com/gh/jonathanong/gh-automerge/tree/master)
[![NSP Status](https://nodesecurity.io/orgs/jonathanong/projects/90f33c5d-5d57-410c-9899-4e1e7b3a254a/badge)](https://nodesecurity.io/orgs/jonathanong/projects/90f33c5d-5d57-410c-9899-4e1e7b3a254a)
[![Greenkeeper badge](https://badges.greenkeeper.io/jonathanong/gh-automerge.svg)](https://greenkeeper.io/)

----

GH-Automerge is a cron bot. It is built node and can used by being installed with NPM. 

----

**GH-Automerge automatically:**

- Merges master into a PR when it is out of date
- Merges a PR when it's up-to-date and is not blocked by checks

## Usage

To enable this on a PR, add a label called `AUTOMERGE` in Github.

## Installation

GH-Automerge could run this where ever. However, it is typically run as a cron job within CircleCI.

**To install:**
1. Create a repository
1. Run `npm i --save-dev gh-automerge`

**Enabling GH-Automerge:**
1. Copy the [`.circleci/config.yml` template](.circleci/template.config.yml) from this [repository]() into a repository
1. Enable CircleCI
1. Add `GITHUB_TOKEN` and `GITHUB_ORG` env vars to your CircleCI config
