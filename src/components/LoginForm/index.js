const LoginForm = () => (
  /* eslint-disable jsx-a11y/label-has-associated-control */
  <form>
    <div className="mb-3">
      <label htmlFor="username" className="form-label">Email address</label>
      <input type="text" className="form-control" id="username" />
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">Password</label>
      <input type="password" className="form-control" id="password" />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  /* eslint-enable jsx-a11y/label-has-associated-control */
);

export default LoginForm;