import React, { useEffect, useState } from "react";
import "./Header.css";

export default function Header() {
  const [showModal, setshowModal] = useState(false);
  const [them, setThem] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (them == "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [them]);

  function handelDivClick() {
    if (showModal) {
      setshowModal(false);
    }
  }

  return (
    <header className="flex">
      <button
        onClick={() => {
          setshowModal(true);
        }}
        className="menu icon-menu"
      />
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          localStorage.setItem(
            "currentMode",
            them === "dark" ? "light" : "dark"
          );
          setThem(localStorage.getItem("currentMode"));
        }}
        className={them === "dark" ? "icon-moon-o mode" : "icon-sun"}
      />

      {showModal && (
        <div className="fixed" onClick={handelDivClick}>
          <ul className="modal">
            <li>
              <button className="icon-cross" onClick={handelDivClick} />
            </li>

            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
