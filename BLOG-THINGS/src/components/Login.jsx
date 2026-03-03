import { auth } from "../firebase";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";


export default function Login() {

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      console.log("Google User:", result.user);
      alert("Google Login Successful");
    } catch (error) {
      console.error(error);
    }
  };

  const handleGithubLogin = async () => {
    try {
      const provider = new GithubAuthProvider();
      const result = await signInWithPopup(auth, provider);

      console.log("GitHub User:", result.user);
      alert("GitHub Login Successful");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2>Sign in to your account</h2>

        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />

        <button className="primary-btn">🔒 Sign in</button>

        <button
          className="social-btn"
          onClick={handleGithubLogin}
        >
         🐙 Sign in with GitHub
        </button>

        <button
          className="social-btn"
          onClick={handleGoogleLogin}
        >
         🌐 Sign in with Google
        </button>
      </div>
    </div>
  );
}