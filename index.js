require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const githubData={
  "login": "AryamanJaiswal",
  "id": 73318772,
  "node_id": "MDQ6VXNlcjczMzE4Nzcy",
  "avatar_url": "https://avatars.githubusercontent.com/u/73318772?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/AryamanJaiswal",
  "html_url": "https://github.com/AryamanJaiswal",
  "followers_url": "https://api.github.com/users/AryamanJaiswal/followers",
  "following_url": "https://api.github.com/users/AryamanJaiswal/following{/other_user}",
  "gists_url": "https://api.github.com/users/AryamanJaiswal/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/AryamanJaiswal/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/AryamanJaiswal/subscriptions",
  "organizations_url": "https://api.github.com/users/AryamanJaiswal/orgs",
  "repos_url": "https://api.github.com/users/AryamanJaiswal/repos",
  "events_url": "https://api.github.com/users/AryamanJaiswal/events{/privacy}",
  "received_events_url": "https://api.github.com/users/AryamanJaiswal/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Aryaman Jaiswal",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 5,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2020-10-22T23:35:55Z",
  "updated_at": "2024-04-16T01:57:14Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/youtube', (req, res) => {
    res.send('bello youtube')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})