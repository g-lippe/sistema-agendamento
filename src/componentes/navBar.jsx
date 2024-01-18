import { Link } from "react-router-dom";

const navBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default navBar;
