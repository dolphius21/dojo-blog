import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>Blog not found!</p>
      <Link className="link" to="/">
        Back to the homepage...
      </Link>
    </div>
  );
};

export default NotFound;
