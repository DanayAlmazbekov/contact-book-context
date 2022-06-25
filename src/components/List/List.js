import React, { useContext, useEffect } from "react";
import { ContactContext } from "../../contexts/ContactsContext";
import { useNavigate } from "react-router-dom";

const List = () => {
  const { getContacts, contacts, deleteContact } = useContext(ContactContext);
  const navigate = useNavigate();
  useEffect(() => {
    getContacts();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      {contacts.map(item => (
        <div style={{ marginTop: "20px" }} key={item.id}>
          <div>{item.name}</div>
          <div>{item.surname}</div>
          <div>{item.number}</div>
          <button
            className="buttons button2"
            style={{
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => deleteContact(item.id)}>
            Delete
          </button>{" "}
          <button
            className="buttons button3"
            style={{
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => navigate(`/edit/${item.id}`)}>
            Edit
          </button>
        </div>
      ))}
    </div>
  );
};

export default List;
