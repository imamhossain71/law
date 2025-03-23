import React from "react";

const About = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>About Us</h1>
      <p style={{ lineHeight: "1.8", color: "#555", textAlign: "justify" }}>
        I am <strong>Adv Najnin Noor</strong>, a Bangladeshi lawyer deeply committed to upholding justice within a legal system shaped by British common law and our nation’s unique statutes. 
        My work is a journey through a dynamic landscape, where I tackle everything from civil disputes to human rights cases. 
        I take pride in my resilience, standing firm in challenging socio-political times to advocate for my clients. 
        Whether I’m fighting for free speech or addressing corruption, I strive to reflect Bangladesh’s evolving democratic spirit. 
        For me, this profession isn’t just about understanding the law—it’s about serving the people with dedication and purpose.
      </p>

      <div style={{ marginTop: "20px", padding: "10px", backgroundColor: "#f9f9f9", borderRadius: "5px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <h2 style={{ color: "#333" }}>Contact Information</h2>
        <p style={{ margin: "10px 0", color: "#555" }}>
          <strong>Email:</strong> <a href="mailto:adv.najninnoor@example.com" style={{ color: "#007BFF", textDecoration: "none" }}>adv.najninnoor@example.com</a>
        </p>
        <p style={{ margin: "10px 0", color: "#555" }}>
          <strong>Website:</strong> <a href="https://www.lawinfo-bd.com" target="_blank" rel="noopener noreferrer" style={{ color: "#007BFF", textDecoration: "none" }}>www.lawinfo-bd.com</a>
        </p>
      </div>

      <div style={{ marginTop: "30px" }}>
        <h2 style={{ color: "#333", textAlign: "center" }}>Our Location</h2>
        <p style={{ textAlign: "center", color: "#555" }}>Visit us at Chandpur Bus Stand, Bangladesh.</p>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <iframe
            title="Chandpur Bus Stand Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.1234567890123!2d90.63123456789012!3d23.23345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754abcd12345678%3A0x1234567890abcdef!2sChandpur%20Bus%20Stand!5e0!3m2!1sen!2sbd!4v1234567890123"
            width="100%"
            height="400"
            style={{ border: "0", borderRadius: "5px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;