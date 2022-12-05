import React from "react";
import AdminCard from "./AdminCard";
import EmptyCard from "./EmptyCard";

export default function Admin({ loggedIn, users, btnClick }) {
  // If not logged, redirect to login page
  if (!loggedIn) window.location.assign("/app/login");

  console.log("Users received in Admin:");
  console.log(users);

  return (
    <div>
      <div className="container-fluid pt-5 text-center">
        <h1 className="display-3">
          <i className="fas fa-key fa-sm me-2"></i>Administration Panel:
        </h1>
        <hr />
        <div className="row g-2 d-flex justify-content-center">
          {users.map((user, i) => {
            const alias = user.alias;
            const secrets = user.secrets;
            return (
              <React.Fragment key={i}>
                <h2>Alias: {alias}</h2>
                {secrets.length > 0 ? (
                  secrets.map((secret, j) => {
                    return (
                      <div
                        className={`col-4 col-md-3 col-lg-2 text-capitalize text-color-1   
                            ${i % 2 === 0 ? "text-color-1" : "text-color-2"}`}
                        key={j}
                      >
                        <AdminCard
                          user={user}
                          secret={secret}
                          index={j}
                          btnClick={btnClick}
                        />
                      </div>
                    );
                  })
                ) : (
                    <div
                    className="col-4 col-md-3 col-lg-2"
                    >
                        <EmptyCard />
                  </div>
                )}
                <hr />
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <hr />
      <div className="text-center">
        <a className="btn btn-dark" href="/app/submit" role="button">
          Submit a Secret
        </a>
      </div>
    </div>
  );
}
