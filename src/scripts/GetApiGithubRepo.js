
/* global fetch */

const getApiGithubRepo = query =>
  fetch(`https://api.github.com/users/${query}/repos?client_id=c4a97816665136973b6a&client_secret=ea906807d9a05b53e73ac3dfb5c4fe30db442510`)
    .then(data => data.json());

export default getApiGithubRepo;
