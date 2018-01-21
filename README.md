# gh-automerge

[![CircleCI](https://circleci.com/gh/jonathanong/gh-automerge/tree/master.svg?style=svg&circle-token=d89466bafa3597afd2af10e1305ecac50a76958f)](https://circleci.com/gh/jonathanong/gh-automerge/tree/master)
[![NSP Status](https://nodesecurity.io/orgs/jonathanong/projects/90f33c5d-5d57-410c-9899-4e1e7b3a254a/badge)](https://nodesecurity.io/orgs/jonathanong/projects/90f33c5d-5d57-410c-9899-4e1e7b3a254a)

Cron bot that automatically:

- Merges master into your PR when it's out of date
- Merges your PR when it's up-to-date and is not blocked by any checks

To enable this on your PR, simply add a label called `AUTOMERGE`.

## Installation

You could run this where ever, but I run this as a cron job in CircleCI.
Installation:

1. Create a new repository
1. `npm i --save-dev gh-automerge`
1. Copy our [`.circleci/config.yml` template](.circleci/template.config.yml) into your repository
1. Enable CircleCI
1. Add `GITHUB_TOKEN` and `GITHUB_ORG` env vars to your CircleCI config
