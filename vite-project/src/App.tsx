
import ListGroupprops from './components/ListGroupprops'

function App() {
  let items=[ "New york", "San Francisco", "Tokyo", "London", "Paris" ] 
  const handleSelectItem={item: string}=>{
    console.log(item)
  }
  return (
    <div>
      <ListGroupprops item={items} heading="cities" onSelectItem={handleSelectItem} ></ListGroupprops>
       {/* < Message />
      <ListGroup />
       <ListOne/>
      <ListTwo />
      <ListThree /> */}
    </div>
  );
}

export default App;
