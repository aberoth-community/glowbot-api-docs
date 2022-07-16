#!/usr/bin/env node

const assert = require('assert')
const fetch = require('isomorphic-fetch')

// Main
;(() => {
  const { GLOWBOT_API_TOKEN } = process.env
  const url = 'https://glowbot.net/api/v1?' + new URLSearchParams({ id: GLOWBOT_API_TOKEN })
  assert(GLOWBOT_API_TOKEN === 'string', 'failed to find api token environment variable!')
  fetch(url)
    .then(async (res) => (await res.json())?.data)
    .then((data) => {
      assert(data?.ok !== false, 'Api request failed! ' + (data?.error))
      console.log(data)
    })
    .catch((err) => {
      console.error(err)
    })
})()
