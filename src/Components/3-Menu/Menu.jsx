import React, { useState } from "react";
import "./Menu.css";

import { MyProjects } from "./MyProject";
import { AnimatePresence, transform } from "framer-motion";
import { motion } from "framer-motion";

export default function Menu() {
  const [arr, setArr] = useState(MyProjects);
  const [isActive, setIsActive] = useState("All Projects");

  const handelFiltter = (buttonCategory) => {
    setIsActive(buttonCategory);
    const projects = MyProjects.filter((item) => {
      const scondArr = item.category.filter((myitem) => {
        return myitem == buttonCategory;
      });

      return scondArr[0] === buttonCategory;
    });
    setArr(projects);
  };

  return (
    <main className=" flex ">
      <section className="left-section flex">
        <button
          onClick={() => {
            setIsActive("All Projects");
            const projects = MyProjects.filter((item) => {
              return item;
            });
            setArr(projects);
          }}
          className={isActive === "All Projects" ? "active" : ""}
        >
          All Projects
        </button>
        <button
          onClick={() => {
            handelFiltter("css");
          }}
          className={isActive === "HTML & CSS" ? "active" : ""}
        >
          HTML & CSS
          {/* const resultFromProps = prop.filter((t)=> !t.compelted) */}
        </button>

        <button
          onClick={() => {
            handelFiltter("js");
          }}
          className={isActive === "JavaScript" ? "active" : ""}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            handelFiltter("react");
          }}
          className={isActive === "React & MUI" ? "active" : ""}
        >
          React & MUI
        </button>
        <button
          onClick={() => {
            handelFiltter("API");
          }}
          className={isActive === "API" ? "active" : ""}
        >
          APIs
        </button>
        <button
          onClick={() => {
            handelFiltter("node");
          }}
          className={isActive === "Node & Exprees" ? "active" : ""}
        >
          Node & Exprees
        </button>
      </section>

      <section className="right-section flex">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: "8", stiffness: 50 }}
                key={item.imgPath}
                className="  card"
              >
                <img width={266} src={item.imgPath} alt="" />

                <div style={{ width: "266px" }} className="box">
                  <h1 className="title">{item.projsctTitle}</h1>
                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <a href={item.liveDemo} className="icon-link"></a>
                      <a href={item.githubLink} className="icon-github"></a>
                    </div>

                    <a className="link flex" href="">
                      more
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"
                      ></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
}
