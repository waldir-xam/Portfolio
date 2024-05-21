import { Link } from "react-router-dom";
import { Switch } from "../../../../index";
import "./Menu.scss";

const Menu = ({ handleLinkClick }) => {
  return (
    <nav className="menu-header">
      <ul>
        <li>
          <Switch />
        </li>
        <li>
          <Link to="/" onClick={() => handleLinkClick ("experience")}>
            <span className="hashTag">#</span>experience
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => handleLinkClick ("projects")}>
            <span className="hashTag">#</span>projects
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => handleLinkClick ("about")}>
            <span className="hashTag">#</span>about
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
