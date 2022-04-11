import Homepage from "./components/Homepage";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className={"row"}>
        <p className={"page-header"}>Trello Clone Dashboard</p>
      </div>
      <Homepage />
    </DndProvider>
  );
};