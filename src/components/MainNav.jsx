import React, { Component, useState, useEffect } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import NavDropdown from './NavDropdown';
import useToggle from './useToggle';

export default function MainNav() {
  const [dropdown, setDropdown] = useToggle(false);

  return (
    <nav className="MainNav">
      <div className="title">
        <Link to="/" style={{ textDecoration: 'none' }}>
          Chationary
        </Link>
        <img
          className="logo"
          src="https://icon-library.com/images/chatroom-icon/chatroom-icon-24.jpg"
          height="80px"
          width="80px"
          alt="chatroom-logo"
        />
      </div>

      <ul>
        {MenuItems.map((item, idx) => {
          // if (idx === 1) {
          //   return (
          //     <>
          //       <li
          //         className="MainNav-item"
          //         key={`menuitem-${idx}`}
          //         onClick={setDropdown}
          //       >
          //         <Link to={item.link} style={{ textDecoration: 'none' }}>
          //           {item.itemName} <i className="fas fa-caret-down" />
          //         </Link>
          //         {dropdown ? <NavDropdown /> : null}
          //       </li>
          //     </>
          //   );
          // }
          return (
            <li className="MainNav-item" key={`menuitem-${idx}`}>
              <Link to={item.link} >
                {item.itemName}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
