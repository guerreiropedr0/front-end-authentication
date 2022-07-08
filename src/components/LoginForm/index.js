import { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  /* eslint-disable jsx-a11y/label-has-associated-control */
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">Email address</label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
  /* eslint-enable jsx-a11y/label-has-associated-control */
};

export default LoginForm;
