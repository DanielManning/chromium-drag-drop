import React from 'react';

const DraggableDiv = ({
  top,
  left,
  setShowDraggableDiv,
}) => {
  const handleDragStart = (e) => {
    console.log('in dragstart handler');
    console.log(`e.clientX: ${e.clientX}, e.clientY: ${e.clientY}`);
    e.dataTransfer.clearData();
    e.dataTransfer.setData('text/plain', 'sample plaintext data');
  };

  const handleDragEnd = (e) => {
    setShowDraggableDiv(false);
    console.log('in dragend handler');
    console.log(`e.clientX: ${e.clientX}, e.clientY: ${e.clientY}`);
  };

  return (
    <div
      draggable
      style={{
        top,
        left,
        position: 'absolute',
        border: '1px solid black',
        height: '100px',
        width: '100px',
        userSelect: 'none',
      }}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    />
  );
};

export default DraggableDiv;
