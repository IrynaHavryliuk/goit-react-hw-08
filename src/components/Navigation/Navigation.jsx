import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";
import clsx from "clsx";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isActive = ({ isActive }) => {
    return clsx(isActive && css.active);
  };

  return (
    <nav className={css.nav}>
      <NavLink className={isActive} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={isActive} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
}