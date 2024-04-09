import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

// Імпортуємо локальний селектор звідси
import { selectNameFilter } from "../../redux/filters/selectors";

export default function ContactList() {
  // Використовуємо useSelector для виклику локального селектора
  const nameFilter = useSelector(selectNameFilter);
  
  // Локальний селектор, який фільтрує контакти
  const filteredContacts = useSelector(state => state.contacts.items.filter(contact => 
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  ));

  return (
    <ul className={css.list}>
      {filteredContacts.length === 0 ? (
        <h3>No contacts available.</h3>
      ) : (
        filteredContacts.map((contact) => (
          <li className={css.listItem} key={contact.id}>
            <Contact data={contact}></Contact>
          </li>
        ))
      )}
    </ul>
  );
}
