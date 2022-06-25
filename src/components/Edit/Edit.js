import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContactContext } from "../../contexts/ContactsContext";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getOneContact, oneContact, updateContact } =
    useContext(ContactContext);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");
  useEffect(() => {
    getOneContact(id);
  }, []);
  useEffect(() => {
    if (oneContact) {
      setName(oneContact.name);
      setSurname(oneContact.surname);
      setNumber(oneContact.number);
    }
  }, [oneContact]);

  function handleSave() {
    let editedContact = {
      name,
      surname,
      number,
    };
    updateContact(id, editedContact);
    navigate("/");
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "30px",
      }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}>
        {oneContact ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              width: "300px",
            }}>
            <input
              style={{ borderRadius: "20px", border: "none" }}
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="name"
            />
            <input
              style={{
                borderRadius: "20px",
                border: "none",
                marginTop: "10px",
              }}
              value={surname}
              onChange={e => setSurname(e.target.value)}
              placeholder="surname"
            />
            <input
              style={{
                borderRadius: "20px",
                border: "none",
                marginTop: "10px",
              }}
              value={number}
              onChange={e => setNumber(e.target.value)}
              placeholder="number"
            />

            <button
              className="buttons"
              style={{
                borderRadius: "20px",
                border: "none",
                marginTop: "15px",
                backgroundColor: "#27FF00",
                cursor: "pointer",
                width: "100px",
                marginLeft: "83px",
              }}
              onClick={handleSave}>
              Save
            </button>
          </div>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </div>
  );
};

export default Edit;
