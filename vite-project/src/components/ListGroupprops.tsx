import React from 'react'
interface Props{
  items:string[];
  heading: string;
  onSelectedItem:(item: string)=>void
}

const ListGroupprops = ({items,heading,onSelectedItem}:Props) => {
   const [selectedIndex,setSelectedIndex]=useState(-1);
  return (
    <>
    <h1>{heading}</h1>
    {items.length===0 && <p>NO item found</p>}
    <ul className="list-group">
        {items.map((item,index)=>
        <li className={selectedIndex===index?"list-group-item active":"list-group-item"} key={item} onClick={()=>{selectedIndex(index);
            onSelectItem(item);
        }}>{item}</li>)}

    </ul>


    </>
    
  )
}

export default ListGroupprops