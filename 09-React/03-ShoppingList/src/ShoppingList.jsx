import ShoppingListItems from "./ShoppingListItems"

export default function Shopping({items}){
    return(
        <>
        <h2>----------------------------------------</h2>
        <ul>
            {items.map(i=> (
                // <ShoppingListItems 
                // key={i.id} 
                // item={i.item} 
                // quantity={i.quantity} 
                // completed={i.completed}/>

                <ShoppingListItems key={i.id} {...i} />        
                //Using spread to pass all object properties as props because
                //the object property names match the component's prop names. 
            ))}
        </ul>
        </>
    )
}