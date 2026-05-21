import ListGroup from "./components/ListGroup";
import ListOne from "./components/ListOne.tsx";
  import ListTwo from "./components/ListTwo";
 import ListThree from "./components/ListThree";
  import Message from "./components/Message";

function App() {
  return (
    <div>
       < Message />
      <ListGroup />
       <ListOne/>
      <ListTwo />
      <ListThree />
    </div>
  );
}

export default App;
