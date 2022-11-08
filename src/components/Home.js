import Carousel from "./Carousel";

export default function Home ({users}) {

  const secrets = [];
  users.forEach(user => {
    user.secrets.forEach(secret => secrets.push(secret));
  });

  return (
    <div className="container-fluid pt-5 text-center">
      <i className="fas fa-key fa-6x"></i>
      <h1 className="display-3">Secrets</h1>
      <p className="lead">Don't keep your secrets, share them anonymously!</p>
      <hr />
      <Carousel secrets={secrets} />
    </div>
  );
}