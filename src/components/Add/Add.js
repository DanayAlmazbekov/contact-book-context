import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContactContext } from "../../contexts/ContactsContext";

const Add = () => {
  const navigate = useNavigate();
  const { createContact, getContacts } = useContext(ContactContext);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");

  function handleSave() {
    if (!name || !surname || !number) {
      alert("Enter fields!");
    } else {
      let newContact = {
        name,
        surname,
        number,
      };
      createContact(newContact);
      navigate("/");
    }
    getContacts();
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30px",
      }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: "300px",
        }}>
        <input
          style={{
            borderRadius: "20px",
            border: "none",
            height: "30px",
          }}
          className="inputs"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="name"
          type="text"
          name=""
        />
        <input
          style={{
            borderRadius: "20px",
            border: "none",
            marginTop: "10px",
            height: "30px",
          }}
          className="inputs"
          value={surname}
          onChange={e => setSurname(e.target.value)}
          placeholder="surname"
          type="text"
          name=""
        />
        <input
          style={{
            borderRadius: "20px",
            border: "none",
            marginTop: "10px",
            height: "30px",
          }}
          className="inputs"
          value={number}
          onChange={e => setNumber(e.target.value)}
          placeholder="number"
          type="text"
          name=""
        />
        <button
          className="buttons"
          style={{
            marginTop: "15px",
            cursor: "pointer",
            width: "100px",
            marginLeft: "83px",
          }}
          onClick={() => handleSave()}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Add;
