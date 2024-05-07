import React from "react";
import { useDraggable } from "@dnd-kit/core";
// import singlecrochet from "../../assets/icons/single-crochet.png";

const CustomStyle = {
  display: "flex",
  width: "140px",
  height: "140px",
  backgroundColor: "#e8e8a2",
};

export function Draggable({ id, content, styles }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : {};

  return (
    <div
      ref={setNodeRef}
      style={{ ...style, ...CustomStyle, ...styles }}
      {...listeners}
      {...attributes}
    >
      {content}
    </div>
  );
}

// import React from "react";
// import { useDraggable } from "@dnd-kit/core";

// function Draggable(props) {
//   const { attributes, listeners, setNodeRef, transform } = useDraggable({
//     id: "draggable",
//   });
//   const style = transform
//     ? {
//         transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
//       }
//     : undefined;

//   return (
//     <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
//       {props.children}
//     </button>
//   );
// }

// export default Draggable;
