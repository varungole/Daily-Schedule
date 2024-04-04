//Here we retrive data from server. In case we access protected resource, the HTTP request needs Authorixzation header

export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));

    if(user && user.accessToken) {
        return {Authorization: 'Bearer' + user.accessToken};
    }
    else
    {
        return {};
    }
}

//checks localstorage for user. if there is a logged in user with WT, return HTTP authorization header ,else return empty object