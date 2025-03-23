import React, { useState } from "react";

const Contact = () => {
  const [formType, setFormType] = useState(null); // Tracks which form to show
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    number: "",
    details: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formType === "mail") {
      // Placeholder for sending mail logic
      alert(`Mail sent to inbox with details: ${JSON.stringify(formData)}`);
    } else if (formType === "website") {
      alert(`Form submitted to website with details: ${JSON.stringify(formData)}`);
    }
    setFormType(null); // Reset form after submission
    setFormData({ name: "", address: "", number: "", details: "" });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>Contact Us</h1>
      <p style={{ textAlign: "center", color: "#555" }}>Feel free to reach out to us anytime.</p>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <button
          onClick={() => setFormType("mail")}
          style={{
            marginRight: "10px",
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Contact via Mail
        </button>
        <button
          onClick={() => setFormType("website")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#28A745",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Contact via Website
        </button>
      </div>

      {formType && (
        <form
          onSubmit={handleSubmit}
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "5px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 style={{ color: "#333", marginBottom: "20px" }}>
            {formType === "mail" ? "Send us an Email" : "Submit to Website"}
          </h2>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Enter your address"
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Number:</label>
            <input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Details:</label>
            <textarea
              name="details"
              value={formData.details}
              onChange={handleInputChange}
              placeholder="Enter additional details"
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                boxSizing: "border-box",
                resize: "none",
                height: "100px",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: formType === "mail" ? "#007BFF" : "#28A745",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            {formType === "mail" ? "Send Mail" : "Submit"}
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;