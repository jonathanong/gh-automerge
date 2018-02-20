#!/usr/bin/env node

const chalk = require('chalk')

const {
  getPullRequests,
  getPullRequest,
  mergeMasterIntoPullRequest,
  mergePullRequest,
  deleteBranch
} = require('../lib/gh')

async function automerge (pr) {
  const pullRequest = await getPullRequest(pr)
  console.log('PR: %s', pullRequest._links.html.href)

  if (pullRequest.state !== 'open') return console.log('  – PR not open.')
  if (pullRequest.merged) return console.log('  – PR already merged.')

  // can't be merged due to merge conflicts
  if (!pullRequest.mergeable) return console.log(chalk.red('  – PR not mergeable.'))

  // needs to be updated with master
  if (pullRequest.mergeable_state === 'behind') {
    console.log(chalk.yellow('  – PR is being updated.'))
    await mergeMasterIntoPullRequest(pullRequest)
    return
  }

  // blocked based on GitHub's API
  if (pullRequest.mergeable_state === 'blocked') return console.log(chalk.red('  – PR blocked.'))

  // merge PR
  console.log(chalk.green('  – Merging PR.'))
  await mergePullRequest(pullRequest)
  console.log(chalk.green('  – Deleting merged branch.'))
  await deleteBranch(pullRequest)
}

async function run () {
  // TODO: pagination
  const prs = await getPullRequests()

  for (const pr of prs) {
    try {
      await automerge(pr)
    } catch (err) {
      console.error(chalk.red('Failed to automerge PR: ' + pr.pull_request.url))
      console.error(chalk.red(err.stack))
    }
  }
}

run().then(() => {
  process.exit(0)
}, (err) => {
  console.error(chalk.red(err.stack))
  process.exit(1)
})
