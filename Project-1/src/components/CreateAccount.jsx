export default function CreateAccount() {
  return (
    <div className="create-container">
      <h1>Create Account</h1>

      <form className="create-form">
        <div className="row">
          <div>
            <label>Name</label>
            <input type="text" />
          </div>

          <div>
            <label>Email address</label>
            <input type="email" />
          </div>

          <div>
            <label>Password</label>
            <input type="password" />
          </div>
        </div>

        <div className="row">
          <div>
            <label>Gender</label>
            <select>
              <option>Select</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div>
            <label>Social Profiles</label>
            <select>
              <option>Select</option>
              <option>Instagram</option>
              <option>Twitter</option>
            </select>
          </div>
        </div>

        <div>
          <label>Street address</label>
          <input type="text" />
        </div>

        <div className="row">
          <div>
            <label>City</label>
            <input type="text" />
          </div>

          <div>
            <label>State / Province</label>
            <input type="text" />
          </div>

          <div>
            <label>ZIP / Postal code</label>
            <input type="text" />
          </div>
        </div>

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}