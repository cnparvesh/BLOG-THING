export default function Main({ setPage }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Welcome to Blog-Thing! Your <br />
          Platform for Creative <br />
          Expression
        </h1>

        <p>
          Are you passionate about sharing your thoughts, experiences, and
          expertise with the world? Look no further! Blog-Thing is your ultimate
          destination for creating and publishing your own blogs with ease.
        </p>

        <button className="hero-btn" onClick={() => setPage("login")}>
          Create Your First Blog
        </button>
      </div>
    </section>
  );
}
