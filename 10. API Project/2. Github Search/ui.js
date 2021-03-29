class Ui {
  render(profile, repos) {
    const main = document.createElement('main')
    main.classList.add('mb-5')
    let repoCards = ''
    repos.forEach((repo) => {
      repoCards += `
      <div class="p-2 mb-3 card">
      <a href="${repo.git_url}" class="mb-3 fs-4">${repo.name}</a>
      <p class="mb-3">${repo.description}</p>
      <div>
        <span class="badge bg-primary">${repo.language}</span>
        <span class="badge bg-info">Stars: ${repo.stargazers_count}</span>
        <span class="badge bg-success">Forks: ${repo.forks}</span>
      </div>
    </div>
    `
    })
    main.innerHTML = `
    <div class="container">
    <div class="row">
      <div class="col-sm-4">
        <figure>
          <img
            src="${profile.avatar_url}"
            alt=""
            style="width: 150px; height: 150px; object-fit: cover"
            class="rounded-circle"
          />
        </figure>
        <h1 class="fs-3">${profile.login}</h1>
        <p>${profile.bio}</p>
        <a class="btn btn-primary" href="${profile.html_url}" target="_blank"> View Profile </a>
        <div class="mb-3">
          <span class="badge bg-primary">Following: ${profile.following}</span>
          <span class="badge bg-info">Repos: ${profile.public_repos}</span>
          <span class="badge bg-success">Followers: ${profile.followers}</span>
        </div>
        <ul class="list-group">
          <li class="list-group-item">Website: <a href="${profile.blog}">${profile.blog}</a></li>
          <li class="list-group-item">Location: ${profile.location}</li>
          <li class="list-group-item">Created at: ${profile.created_at}</li>
          <li class="list-group-item">Twitter: ${profile.twitter_username}</li>
        </ul>
      </div>
      <div class="col-sm-8">
        <h2>Repositories</h2>
        ${repoCards}
      </div>
    </div>
  </div>
    `
    const _main = document.querySelector('main')
    if (_main) {
      _main.remove()
    }
    document.body.insertBefore(main, document.querySelector('footer'))
  }
  alert(type, message) {
    const div = document.createElement('div')
    div.className = `alert alert-${type}`
    div.innerText = message
    document.querySelector('.notification').appendChild(div)
    setTimeout(() => {
      div.remove()
    }, 3000)
  }
}
