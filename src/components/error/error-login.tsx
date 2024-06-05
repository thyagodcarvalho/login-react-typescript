import "./style.css";

export const ErrorLogin = () => {
  return (
    <div className="container-error">
      <h1>Sorry, we couldn't find an account with this username.</h1>
      <p>Please check you're using the right username and try again.</p>
      <a href="/login" className="btn-error">
        Login
      </a>
    </div>
  );
};
