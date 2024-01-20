import { Link } from "react-router-dom";

const Header = ({children , title}) => {
  console.log("rendered");
  return (

    <div>
      <div>
        <h5> {children}</h5>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/dashboard">
            <li>Dashboard</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
        </ul>
      </div>
      <div>{title}</div>
    </div>
  );
};

export default Header;




