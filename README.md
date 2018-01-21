# gh-automerge

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
