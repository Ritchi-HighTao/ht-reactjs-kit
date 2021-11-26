import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import './HTMenuLink.scss';

const HTMenuLink = ({ label, to, activeOnlyWhenExact, disabled }) => {
  const match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  const linkClass = () => {
    if (disabled) return 'disabled';
    return match ? 'active' : '';
  };

  const LinkContent = () => (
    <span className="ht-menu-link__link-block">
      <div className="link-block__text-block">
        <p className={`text-block__text ${linkClass()}`}>{label}</p>
      </div>
      <span className={`link-block__radio ${linkClass()}`} />
    </span>
  );

  return disabled ? (
    <div className="ht-menu-link">
      <LinkContent />
    </div>
  ) : (
    <Link className="ht-menu-link" to={to}>
      <LinkContent />
    </Link>
  );
};

export default HTMenuLink;
