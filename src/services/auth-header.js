export default function getAccessToken() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.access) {
    return { Authorization: 'Bearer ' + user.access };
  } else {
    return {};
  }
}