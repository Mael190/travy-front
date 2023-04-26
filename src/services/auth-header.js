exports.authHeader = () => {
  let token = JSON.parse(localStorage.getItem('token'));
  
  if (token) {
    return 'Bearer ' + token;
  } else {
    return {};
  }  
}

exports.getOrganisation = () =>  JSON.parse(localStorage.getItem('currentOrganisation')); 