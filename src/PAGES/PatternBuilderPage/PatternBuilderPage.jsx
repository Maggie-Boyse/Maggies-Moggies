import "../AboutPage/AboutPage.scss";
import Header from "../../COMPONENTS/Header/Header";
import NavBar from "../../COMPONENTS/NavBar/NavBar";
import Footer from "../../COMPONENTS/Footer/Footer";
import React from "react";
import { DndContext } from "@dnd-kit/core";

import Draggable from "../../COMPONENTS/Draggable/Draggable";
import { Droppable } from "./Droppable";

function DiagramBuilderPage() {
  return (
    <section>
      <Header />
      <NavBar />
      <DndContext>
        <Draggable />
        <Droppable />
      </DndContext>
      <Footer />
    </section>
  );
}

export default DiagramBuilderPage;
