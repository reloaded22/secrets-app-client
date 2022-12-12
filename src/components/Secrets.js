import Card from "./Card";

export default function Secrets({ users }) {
  
  // Get the array of secrets to show
  const secrets = [];
  users.forEach((user) => {
    user.secrets.forEach((secret) => secrets.push(secret));
  });

  return (
    <div>
      <div className="container-fluid pt-5 text-center">
        <h1 className="display-3">
          <i className="fas fa-key fa-sm me-2"></i>Here lay all people's
          secrets:
        </h1>
        <hr />
        <div className="row g-2">
          {secrets.map((secret, i) => {
            return (
              <div
                className={`col-4 col-md-3 col-lg-2 text-capitalize text-color-1    
              ${i % 2 === 0 ? "text-color-1" : "text-color-2"}`}
                key={i}
              >
                <Card secret={secret} />
              </div>
            );
          })}
        </div>
      </div>
      <hr />
      <div className="text-center">
        <a className="btn btn-dark" href="/submit" role="button">
          Submit a Secret
        </a>
      </div>
    </div>
  );
}
