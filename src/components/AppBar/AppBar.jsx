import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import css from "./AppBar.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <div className={css.div}>
        <Navigation className={css.link}></Navigation>
        {isLoggedIn ? (
          <UserMenu></UserMenu>
        ) : (
          <AuthNav className={css.link}></AuthNav>
        )}
      </div>
    </div>
  );
}