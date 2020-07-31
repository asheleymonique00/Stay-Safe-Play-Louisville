import axios from 'axios';
const api = axios.create({ baseURL: "http://localhost:3001" });
// =============Auth ==============//
// Route ---> localhost:3001/auth/sign
export const signUpUser = async (signUpData) => {
    const userData = await api.post('/auth/signup', signUpData);
    console.log(userData);
    localStorage.setItem('authToken', userData.data.token);
    api.defaults.headers.common.authorization = `Bearer ${userData.data.token}`;
    return userData.data.user;
  }





// // Route ---> localhost:3001/auth/login
// export const loginUser = async (loginData) => {
//   // Take the username and password the user entered in the login form
//   // and POST it to our express api. Then...we await...
//   const userData = await api.post('/auth/login', loginData);
//   //Set our jwt token into localStorage so that we can use it to
//   // verify our user in the future (DO NOT STORE THE USER'S PASSWORD
//   // IN THE FRONT END). We can instead use the token to verify the user
//   // which keeps all personal information safe and secure.
//   localStorage.setItem('authToken', userData.data.token);
//   // We're attaching the token to our http headers, these are `meta`
//   // information, extra information that is sent along with our request.
//   // In this case we are sending a Bearer Token which the back end api
//   // will be able to check against the token that is saved in the database.
//   api.defaults.headers.common.authorization = `Bearer ${userData.data.token}`;
//   // We only need the username and id on the front end, so that's all we're
//   // sending.
//   return userData.data.user;
// }