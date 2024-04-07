import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors.js"; // Додано імпорт

export const selectedContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectedContacts, selectNameFilter], // Використовуємо selectNameFilter тут
  (contacts, contactsFilter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(contactsFilter.toLowerCase())
    );
  }
);

export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;