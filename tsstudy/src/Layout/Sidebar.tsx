import { Fragment } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Fragment>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <div>
          <Link to="/App">App</Link>
        </div>
        <div>
          <Link to="/TicTakToe">TicTakToe</Link>
        </div>
        <div>
          <Link to="/Calendar">Calendar</Link>
        </div>
      </p>
    </Fragment>
  );
};

export default Sidebar;
