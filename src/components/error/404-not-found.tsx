import "./style.css";

export const NotFound = () => {
  return (
    <>
      <div className="container-error">
        <h1>404</h1>
        <p>NOT FOUND.</p>
        <a href="/" className="btn-error">
          Home
        </a>
      </div>
    </>
  );
};
