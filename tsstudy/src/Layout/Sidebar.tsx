import { Fragment } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Fragment>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/TicTakToe">TicTakToe</Link>
      </p>
    </Fragment>
  );
};

export default Sidebar;
