import React, { useEffect, useRef, useState } from 'react';

import './HTSidebar.scss';

import HTMenuLink from '../menuLink/HTMenuLink';
import HTLogo from '../logo/HTLogo';
import HTMenuButton from '../menuButton/HTMenuButton';

const HTSidebar = ({ link, footer, logo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const refs = useRef();

  function handleClick(e) {
    if (refs && refs.current) {
      const ref = refs.current;
      if (!ref.contains(e.target)) {
        setIsOpen(false);
      }
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div
      ref={refs}
      className={`menu-sidebar ${
        isOpen ? 'menu-sidebar__open' : 'menu-sidebar__closed'
      }`}
    >
      <div className="menu-sidebar__container">
        <HTMenuButton
          onClick={() => setIsOpen(!isOpen)}
          active={isOpen}
          className="container__button-trigger"
        />
        {isOpen && (
          <div className="container__logo">
            <HTLogo logo={logo} />
          </div>
        )}
        <div className="container__radio">
          {link.map((route) => (
            <HTMenuLink
              key={route.to}
              to={route.to}
              label={isOpen ? route.label : ''}
            />
          ))}
        </div>
        <div className="container__footer">
          {footer}
        </div>
      </div>
    </div>
  );
};

export default HTSidebar;
