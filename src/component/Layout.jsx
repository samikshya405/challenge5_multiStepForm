import React, { useState } from "react";
import sidebar from "../assets/images/bg-sidebar-desktop.svg";
import "./layout.css";

const details = [
  { name: "YOUR INFO" },
  { name: "SELECT PLAN" },
  { name: "ADD-ONS" },
  { name: "SUMMARY" },
];

const Layout = ({ children,indexNum,info,msg}) => {

  return (
    <div className="body">
      <div className="container section d-flex  align-items-center p-3">
        <div
          className="d-flex p-2  box  w-100 gap-3 "
          style={{ background: "white" }}
        >
          <div className="sidebar py-5 px-3 ">
            {details.map((item, index) => {
              return (
                <div key={index} className="d-flex align-items-center gap-2">
                  <div
                    className="circle "
                    style={{
                      background:
                        indexNum === index + 1
                          ? "var(--lightBlue)"
                          : "inherit",
                      color: indexNum === index + 1 ? "black" : "inherit",
                     
                    }}
                  >
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-secondary m-0">STEP {index + 1}</p>
                    <p className="fw-bold">{item.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="p-2 d-flex flex-column align-items-center main-bar justify-content-center   w-100 ">
            <div className="d-flex steps gap-3 p-4 text-white">
            {details.map((item, index) => {
              return (
                <div key={index} className="d-flex align-items-center gap-2">
                  <div
                    className="circle "
                    style={{
                      background:
                        indexNum === index + 1
                          ? "var(--lightBlue)"
                          : "inherit",
                      color: indexNum === index + 1 ? "black" : "inherit",
                     
                    }}
                  >
                    {index + 1}
                  </div>
                  
                </div>
              );
            })}

            </div>

          <div className=' main  py-3'>
            <h1>{info}</h1>
            <p className='text-secondary '>{msg}</p>
            {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
