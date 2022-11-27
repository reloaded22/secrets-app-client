
export default function Submit () {
    return (
      <div className="container-fluid py-5 text-center">
        <i className="fas fa-key fa-6x"></i>
        <h1 className="display-3">Secrets</h1>
        <p className="secret-text">
          Don't keep your secrets, share them anonymously!
        </p>

        <form className="" action="/api/submit" method="POST">
          <div className="form-group">
            <input
              type="text"
              className="form-control text-center w-75 mx-auto"
              name="secret"
              placeholder="What's your secret?"
              maxLength="500"
            />
          </div>
          <button type="submit" className="btn btn-dark mt-3">
            Submit
          </button>
        </form>
      </div>
    );
}
