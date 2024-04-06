import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";
import { logOut } from "../../redux/auth/operations";

export default function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={css.div}>
      <p className={css.text}>Welcome, {user.name} !</p>
      <button
        type="button"
        onClick={() => dispatch(logOut())}
        className={css.btn}
      >
        Log out
      </button>
    </div>
  );
}