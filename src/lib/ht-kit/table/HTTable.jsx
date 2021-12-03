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
        {headRenders.map((headRender) => (<th key={headRender.key}>{headRender.renderer()}</th>))}
      </tr>
    );
  };

  const renderCell = (lineRender, lineData) => lineRender(lineData);

  const renderLine = (lineData) => lineRenders.map((lineRender) => (
    <td key={lineRender.key}>{renderCell(lineRender, lineData)}</td>
  ));

  const renderBody = () => {
    if (!data || !lineRenders) {
      return null;
    }

    return data.map((lineData) => (<tr key={lineData.key}>{renderLine(lineData)}</tr>));
  };

  return (
    <table className="ht-table">
      <thead>{renderHead()}</thead>
      <tbody>{renderBody()}</tbody>
    </table>
  );
};

export default HTTable;
