import React, { useState } from 'react';
import DraggableDiv from './DraggableDiv';

const DragStartRegion = () => {
  const [showDraggableDiv, setShowDraggableDiv] = useState(false);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  const handleMouseMove = (e) => {
    if (e.buttons === 1 && !showDraggableDiv) {
      setShowDraggableDiv(true);
      setLeft(e.clientX - 50);
      setTop(e.clientY - 50);
    }
  };

  const handleMouseUp = (e) => {
    setShowDraggableDiv(false);
    setLeft(0);
    setTop(0);
  };

  return (
    <>
      <div
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{
          userSelect: 'none',
        }}
      >
        { /* https://www.lipsum.com/ */ }
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rutrum rutrum sapien sit amet faucibus. Vestibulum auctor ultricies nibh vitae consequat. Nulla efficitur, arcu ut semper porttitor, velit neque fringilla erat, in vehicula mauris nisi vitae est. Pellentesque cursus in purus et sodales. In nec lacus felis. Cras at odio eros. Donec egestas pretium nunc mollis posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ligula dolor. In luctus, sem in dictum scelerisque, nibh mauris scelerisque mi, eget feugiat eros nisl et purus. Ut sollicitudin augue vitae felis consectetur iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

        Suspendisse ut condimentum elit, a maximus arcu. Sed turpis tortor, tincidunt id nibh ac, pellentesque suscipit nunc. Phasellus non commodo ex. Vivamus magna est, fringilla et placerat non, volutpat sed tellus. Ut in ornare ante. Praesent a justo et dolor sollicitudin tristique in quis sapien. Aenean id libero id nibh condimentum congue at ut enim. Ut nunc orci, congue at libero sit amet, lobortis commodo nisl. Etiam lacinia, elit vitae rhoncus gravida, libero lectus ullamcorper risus, at eleifend magna purus vitae purus. Phasellus molestie turpis at scelerisque elementum. Morbi eleifend faucibus nibh, id ultricies tortor rutrum sed. Sed at ante non dui pulvinar dignissim. Aliquam malesuada vehicula sem ac condimentum. Sed bibendum nisl lacus, eleifend malesuada diam dictum vitae.

        Proin lobortis eleifend eros, eu bibendum sem volutpat vel. Ut eu venenatis elit. Maecenas tincidunt id velit in vestibulum. Nullam accumsan ligula non vulputate elementum. In auctor lectus eu mi sagittis, quis scelerisque lacus consectetur. Suspendisse potenti. Nullam purus felis, tempus ac tristique quis, aliquet ut felis. Aenean scelerisque, metus vestibulum pharetra pretium, diam erat maximus massa, in blandit leo lectus in nisi.

        Nullam accumsan volutpat magna, a pellentesque arcu. Etiam dictum interdum mi in pulvinar. Cras justo ex, ornare sed erat nec, porttitor volutpat ipsum. Donec sed quam ultricies, accumsan erat sit amet, gravida nisl. Donec vestibulum lectus in mi porttitor tincidunt. Ut pellentesque blandit malesuada. Sed consectetur, nisl vitae euismod accumsan, elit nulla mattis ex, vulputate pulvinar tortor sapien vel elit. Praesent eu pellentesque orci, vitae mattis enim. Sed quis consequat nulla, ac ullamcorper purus. Sed ac turpis in orci ultricies lobortis convallis quis dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

        Quisque vel urna in tortor consectetur lacinia. Mauris lacinia magna ac libero auctor ultricies. Maecenas placerat, risus sed dapibus aliquet, libero mauris volutpat velit, nec malesuada tellus ipsum ut ex. Duis sem ligula, vulputate eget pellentesque eu, convallis cursus orci. Nam blandit ante et mauris vehicula, in commodo lectus porttitor. Donec eu lacus et ligula pulvinar porta eu vel nisi. Nullam in lacus lacus. Quisque eu turpis ac ligula gravida dignissim. Vestibulum semper finibus dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ultrices vulputate risus, eu aliquet neque lacinia non. 
      </div>
      {showDraggableDiv ? (
        <DraggableDiv
          top={top}
          left={left}
          setShowDraggableDiv={setShowDraggableDiv}
        />
      ) : null}
    </>
  );
}

export default DragStartRegion;
