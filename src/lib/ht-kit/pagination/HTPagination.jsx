import React, { useState, useEffect } from 'react';

import './HTPagination.scss';

const HTPagination = (props) => {
  const {
    maxPage,
    currentPage,
    onChange,
  } = props;

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
  });

  const handleOnChange = (newPage) => (e) => {
    if (onChange) {
      onChange(e, newPage);
    }
  };

  const renderPageButton = (page) => (
    <button
      onClick={handleOnChange(page)}
      disabled={currentPage === page}
      className={`ht-pagination__button${currentPage === page ? '-active' : ''}`}
      key={page}
      type="button"
    >
      {page}
    </button>
  );

  const renderSeparator = (n) => (
    <div className="ht-pagination__separator" key={`separator-${n}`}>
      <span>...</span>
    </div>
  );

  const renderPageButtons = () => {
    const previous = [];
    const middle = [];
    const after = [];
    let min;
    let max;

    if (width <= 576) {
      const previousMobile = currentPage === 1 ? 1 : currentPage - 1;
      const afterMobile = currentPage === maxPage ? maxPage : currentPage + 1;

      return [
        ...(currentPage === 1 ? [] : [renderPageButton(previousMobile)]),
        renderPageButton(currentPage),
        ...(currentPage === maxPage ? [] : [renderPageButton(afterMobile)]),
      ];
    }

    if (maxPage <= 7) {
      min = 1;
      max = maxPage;
    } else {
      min = currentPage - 3;
      max = currentPage + 3;

      if (currentPage > 3) {
        min = Math.min(currentPage - 1, maxPage - 4);
        previous.push(renderPageButton(1));
        previous.push(renderSeparator(1));
      }

      if (currentPage < maxPage - 3) {
        max = Math.max(currentPage + 1, 5);
        after.push(renderSeparator(2));
        after.push(renderPageButton(maxPage));
      }

      min = Math.max(min, 1);
      max = Math.min(max, maxPage);
    }

    // eslint-disable-next-line no-plusplus
    for (let i = min; i <= max; ++i) {
      middle.push(renderPageButton(i));
    }

    return [...previous, ...middle, ...after];
  };

  return (
    <div className="ht-pagination">
      <button
        onClick={handleOnChange(currentPage - 1)}
        disabled={currentPage <= 1}
        className="ht-pagination__button ht-pagination__button__hide-mobile"
        type="button"
      >
        <span className="ht-pagination__button-icon">
          {'<<'}
        </span>
        <span className="ht-pagination__button-text">Previous</span>
      </button>
      {renderPageButtons()}
      <button
        onClick={handleOnChange(currentPage + 1)}
        disabled={currentPage >= maxPage}
        className="ht-pagination__button ht-pagination__button__hide-mobile"
        type="button"
      >
        <span className="ht-pagination__button-text">Next</span>
        <span className="ht-pagination__button-icon">
          {'>>'}
        </span>
      </button>
    </div>
  );
};

export default HTPagination;
