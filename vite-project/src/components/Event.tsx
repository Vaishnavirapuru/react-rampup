

const Event = () => {
    let items=['New York',"san Francisco","Tokyo","London","paris"]
    const handleClick=(event:MouseEvent)=>console.log(event.);
  return (
    <>
    {items.length===0 && <p>no item found</p>}
    <ul className="list-group">
        {items.map((item, index)=>(
         < li className="list-group-item" key={item} onClick={(event)=>console.log(event)}>       
        
            {item}
        </li>
        ))}
    </ul>
    </>
    
  )
}

export default Event