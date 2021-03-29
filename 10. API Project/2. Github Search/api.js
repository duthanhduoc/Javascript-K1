class Api {
  constructor() {
    this.client_id = '416a7b897e7adf4e85c5'
    this.client_secret = '71fe03e2058a659c8aece6e8f9d919e46329954e'
  }

  async getUser(username) {
    const profile = fetch(
      `https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    ).then(async (res) => {
      if (!res.ok) {
        const { message } = await res.json()
        throw new Error(message)
      }
      return res.json()
    })
    const repos = fetch(
      `https://api.github.com/users/${username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`
    ).then(async (res) => {
      if (!res.ok) {
        const { message } = await res.json()
        throw new Error(message)
      }
      return res.json()
    })
    const [resProfile, resRepos] = await Promise.all([profile, repos])
    return {
      profile: resProfile,
      repos: resRepos
    }
  }
}
