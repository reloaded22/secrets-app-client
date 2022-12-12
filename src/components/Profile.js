
export default function Profile ({ loggedIn, user }) {

  if (!loggedIn) window.location.assign("/login");

  return (
    <div className="container-fluid py-5 text-center">
      <i className="fas fa-key fa-6x"></i>
      <h1 className="display-3">My Profile:</h1>
      <p className="lead">My Alias: {user.alias}</p>
      <p className="lead">My Email: {user.username}</p>
      <hr />
    </div>
  );
}