class API {
  constructor() {
    this.client_id = 'ee24c8eca98bc3a8ae9c'
    this.client_secret = '1f10e897bd616b84637138e8f162bdda766f5e6f'
    this.repos_count = 5
    this.repos_sort = 'created: asc'
  }

  static async getUser(username) {
    const [profileRes, repoRes] = await Promise.all([
      fetch(
        `https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`
      ),
      fetch(
        `https://api.github.com/users/${username}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
      )
    ])
    const [profile, repo] = await Promise.all([
      profileRes.json(),
      repoRes.json()
    ])
    if (profileRes.status !== 200) {
      const err = new Error(profile.message)
      throw err
    }
    return {
      profile,
      repo
    }
  }
}
