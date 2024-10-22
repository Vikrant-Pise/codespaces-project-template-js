/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "3rem",
        background: "rgba(255,255,255,0.75)",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      {/* add font size */}
      <a href="#home" style={{ fontSize: "1.2rem" }}>Home</a>
      <a href="#about" style={{ fontSize: "1.2rem" }}>About</a>
      <a href="#portfolio" style={{ fontSize: "1.2rem" }}>Portfolio</a>
      <a href="#footer" style={{ fontSize: "1.2rem" }}>Contact</a>
    </div>
  );
};

export default Header;
