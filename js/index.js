const token = 'b5b5db15048a6d43c40b64747ad21c2ee1df8d56';
fetch('https://api.github.com/user/repos', {
  headers:{
    Authorization: `token ${token}`
  }
})
  .then(res=> res.json())
  .then(json=>console.log(json))
