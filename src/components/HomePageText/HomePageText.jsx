import { useSelector } from "react-redux";
import css from "./HomePageText.module.css";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";

export default function HomePageText() {
  const user = useSelector(selectUser);
  const isLoginned = useSelector(selectIsLoggedIn);
  return (
    <div className={css.text}>
      <p>
        Hello,{" "}
        {isLoginned ? (
          <span className={css.textAccent}>{user.name}</span>
        ) : (
          <>user</>
        )}{" "}
        ! Our web application offers a convenient way to store and manage your
        phone contacts securely. With our platform, you can keep all your
        contact information private and accessible only to you. Easily add,
        edit, and delete contacts as needed, ensuring that your personal
        information remains confidential. Experience peace of mind knowing that
        your contacts are safely stored and organized with our user-friendly
        interface. <br />
        {isLoginned && <span className={css.textAccent}>Enjoy your use!</span>}
      </p>
    </div>
  );
}