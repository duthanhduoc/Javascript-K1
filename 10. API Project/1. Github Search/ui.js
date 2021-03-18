class UI {
  static showInfo(profile, repos) {
    const ProfileRepoNode = document.querySelector('.profile-repos')
    ProfileRepoNode && ProfileRepoNode.remove()
    const divNode = document.createElement('div')
    divNode.classList.add('container', 'profile-repos')
    const repo = (repo) => {
      return `
      <div class="card p-3">
        <div>
          <a href="${repo.html_url}" class="text-bold" target="_blank">${repo.name}</a>
        </div>
        <p>${repo.description}</p>
        <div>
          <span class="badge badge-primary">${repo.language}</span>
          <span class="badge badge-secondary">Star: ${repo.stargazers_count}</span>
          <span class="badge badge-success">Fork: ${repo.forks}</span>
        </div>
      </div>
      `
    }
    let reposHtml = ''
    repos.forEach((item) => {
      reposHtml += repo(item)
    })
    divNode.innerHTML = `
      <div class="row">
        <div class="col-md-4 col-lg-3">
          <img
            class="img-fluid mb-2 rounded-circle"
            src="${profile.avatar_url}"
          />
          <h3 class="mb-3 mt-2">${profile.login}</h3>
          <div class="mb-2">${profile.bio}</div>
          <a href="${profile.html_url}" class="btn btn-primary my-2" target="_blank">View profile</a>
          <div class="mb-3">
            <span class="badge badge-primary">Following: ${profile.following}</span>
            <span class="badge badge-secondary">Repos: ${profile.public_repos}</span>
            <span class="badge badge-success">Follower: ${profile.followers}</span>
          </div>
          <ul class="list-group small">
            <li class="list-group-item">Website: <a href="${profile.blog}">${profile.blog}<a></li>
            <li class="list-group-item">Location: ${profile.location}</li>
            <li class="list-group-item">Created At: ${profile.created_at}</li>
            <li class="list-group-item">Twitter: ${profile.twitter_username}</li>
          </ul>
        </div>
        <div class="col-md-8 col-lg-9">
          <h3 class="mb-3">Repositories</h3>
         ${reposHtml}
        </div>
        </div>
      </div>
    `
    document
      .querySelector('body')
      .insertBefore(divNode, document.querySelector('footer'))
  }
  static alert(message, className) {
    const divNode = document.createElement('div')
    divNode.classList = 'alert ' + className
    divNode.textContent = message
    document.getElementById('notification').appendChild(divNode)
    setTimeout(() => {
      divNode.remove()
    }, 2000)
  }
}
