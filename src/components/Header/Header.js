import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
        }}>
        <Link to="/add">
          <button
            className="buttons"
            style={{
              backgroundColor: "#B485ED",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
            }}>
            Add contact
          </button>
        </Link>
        <Link to="/">
          <button
            className="buttons"
            style={{
              backgroundColor: "#B485ED",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
              marginLeft: "5px",
            }}>
            Contacts
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
