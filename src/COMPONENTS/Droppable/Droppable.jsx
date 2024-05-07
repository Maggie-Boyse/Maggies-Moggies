import React from "react";
import { useDroppable } from "@dnd-kit/core";

const CustomStyle = {
  display: "flex",
  width: "1200px",
  height: "600px",
  background: "#d2b3cf",
  margin: "auto",
};

export function Droppable({ children }) {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div ref={setNodeRef} style={{ ...style, ...CustomStyle }}>
      {children}
    </div>
  );
}
