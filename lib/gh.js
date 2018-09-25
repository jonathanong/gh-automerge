
const request = require('request-promise')
const assert = require('assert')

const GITHUB_TOKEN = process.env.GITHUB_TOKEN
assert(GITHUB_TOKEN, 'GitHub token required.')

const GITHUB_ORG = process.env.GITHUB_ORG
assert(GITHUB_ORG, 'GitHub org required.')

const headers = {
  Accept: 'application/vnd.github.v3+json',
  Authorization: `token ${GITHUB_TOKEN}`,
  'User-Agent': 'jonathanong/gh-automerge'
}

Object.assign(exports, {
  getPullRequests,
  getPullRequest,
  mergeMasterIntoPullRequest,
  mergePullRequest,
  deleteBranch,
  updatePullRequest
})

// find all pull requests that have AUTOMERGE
async function getPullRequests () {
  const result = await request({
    url: `https://api.github.com/search/issues`,
    method: 'GET',
    headers,
    qs: {
      per_page: 100,
      sort: 'updated',
      order: 'desc',
      q: `is:pr is:open archived:false org:${GITHUB_ORG} label:"AUTOMERGE"`
    },
    json: true
  })

  return result.items
}

function getPullRequest ({ pull_request: { url } }) {
  return request({
    url,
    method: 'GET',
    headers,
    json: true
  })
}

function mergeMasterIntoPullRequest (pr) {
  return request({
    url: pr.base.repo.merges_url,
    method: 'POST',
    headers,
    json: {
      base: pr.head.ref,
      head: pr.base.ref,
      commit_message: `Automatically merged "${pr.base.ref}" into "${pr.head.ref}" via dsc-cli automerge`
    }
  })
}

function mergePullRequest (pr) {
  return request({
    url: `${pr.url}/merge`,
    method: 'PUT',
    headers,
    json: {
      commit_title: `${pr.title} (#${pr.number})`,
      sha: pr.head.sha,
      merge_method: 'squash'
    }
  })
}

function deleteBranch (pr) {
  return request({
    url: `${pr.head.repo.url}/git/refs/heads/${pr.head.ref}`,
    method: 'DELETE',
    headers
  })
}

function updatePullRequest (pr, options) {
  return request({
    url: pr.url,
    method: 'PATCH',
    headers,
    json: options
  })
}
