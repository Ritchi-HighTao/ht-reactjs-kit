import React from 'react';

import './HTTable.scss';

const HTTable = (props) => {
  const {
    data,
    headRenders,
    lineRenders,
  } = props;

  const renderHead = () => {
    if (!headRenders) {
      return null;
    }

    return (
      <tr>
        {headRenders.map((headRender) => (
          <th key={headRender.key}>{headRender.render()}</th>
        ))}
      </tr>
    );
  };

  const renderCell = (lineRender, lineData) => lineRender.render(lineData);

  const getKey = (l) => {
    if (l.id) {
      return l.id;
    }

    return l[Object.keys(l)[0]];
  };

  const renderLine = (lineData) => lineRenders.map((lineRender) => (
    <td key={getKey(lineRender)}>{renderCell(lineRender, lineData)}</td>
  ));

  const renderBody = () => {
    if (!data || !lineRenders) {
      return null;
    }

    return data.map((lineData) => (
      <tr key={getKey(lineData)}>{renderLine(lineData)}</tr>
    ));
  };

  return (
    <table className="ht-table">
      <thead>{renderHead()}</thead>
      <tbody>{renderBody()}</tbody>
    </table>
  );
};

export default HTTable;
