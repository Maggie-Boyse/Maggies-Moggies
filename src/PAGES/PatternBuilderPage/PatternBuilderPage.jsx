import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { Draggable } from "../../COMPONENTS/Draggable/Draggable";
import { Droppable } from "../../COMPONENTS/Droppable/Droppable";
import Header from "../../COMPONENTS/Header/Header";
import NavBar from "../../COMPONENTS/NavBar/NavBar";
import Footer from "../../COMPONENTS/Footer/Footer";
import "../PatternBuilderPage/PatternBuilderPage.scss";

const notesData = [
  {
    id: "1",
    content: "Study English",
    position: {
      x: 10,
      y: 20,
    },
  },
];

export default function PatternBuilderPage() {
  const [notes, setNotes] = useState(notesData);

  function handleDragEnd(ev) {
    // What to do here??
    // It's not a sortable, it's a free drag and drop
    const note = notes.find((x) => x.id === ev.active.id);
    note.position.x += ev.delta.x;
    note.position.y += ev.delta.y;
    const _notes = notes.map((x) => {
      if (x.id === note.id) return note;
      return x;
    });
    setNotes(_notes);
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Header />
      <NavBar />
      <h2>Build Your Own Pattern Diagram</h2>
      <Droppable>
        {notes.map((note) => (
          <Draggable
            styles={{
              position: "absolute",
              left: `${note.position.x}px`,
              top: `${note.position.y}px`,
            }}
            key={note.id}
            id={note.id}
            content={note.content}
          />
        ))}
      </Droppable>
      <Footer />
    </DndContext>
  );
}

// import "../AboutPage/AboutPage.scss";
// import Header from "../../COMPONENTS/Header/Header";
// import NavBar from "../../COMPONENTS/NavBar/NavBar";
// import Footer from "../../COMPONENTS/Footer/Footer";
// import React from "react";
// import { useState } from "react";
// import { DndContext } from "@dnd-kit/core";
// import Draggable from "../../COMPONENTS/Draggable/Draggable";
// import Droppable from "../../COMPONENTS/Droppable/Droppable";
// import chainone from "../../assets/icons/chain-one.png";
// import chaintwo from "../../assets/icons/chain-two.png";
// import singlestitch from "../../assets/icons/single-crochet.png";
// import doublestitch from "../../assets/icons/double-crochet.png";
// import treblestitch from "../../assets/icons/treble-stitch.png";

// function PatternBuilderPage() {
//   const [isDropped, setIsDropped] = useState(false);
//   const draggableMarkup = <Draggable>Drag Me</Draggable>;
//   return (
//     <section className="builder">
//       <Header />
//       <NavBar />
//       <DndContext onDragEnd={handleDragEnd}>
//       <h2>Build Your Own Pattern Diagram</h2>
//       <h3>Drag and drop stitches to create a pattern!</h3>
//       <img
//         src={chainone}
//         width="50px"
//         alt="chain one stitch"
//         className="builder__chainone"
//       />
//       <img
//         src={chaintwo}
//         width="50px"
//         alt="chain one stitch"
//         className="builder__chaintwo"
//       />
//       <img
//         src={singlestitch}
//         width="50px"
//         alt="chain one stitch"
//         className="builder__singlestitch"
//       />
//       <img
//         src={doublestitch}
//         width="50px"
//         alt="chain one stitch"
//         className="builder__doublestitch"
//       />
//       <img
//         src={treblestitch}
//         width="50px"
//         alt="chain one stitch"
//         className="builder__treblestitch"
//       />
//       <div>
//         <h3>Building Space</h3>
//       </div>
//         {!isDropped ? draggableMarkup : null}
//         <Droppable>{isDropped ? draggableMarkup : "Drop here"}</Droppable>
//       </DndContext>
//       <Footer />
//     </section>
//   );
//   function handleDragEnd(event) {
//     if (event.over && event.over.id === "droppable") {
//       setIsDropped(true);
//     }
//   }
// }

// export default PatternBuilderPage;
