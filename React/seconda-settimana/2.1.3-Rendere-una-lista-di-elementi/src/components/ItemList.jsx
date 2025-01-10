const ItemList = () => {
    const fruttaArray = ["banana", "ciliegia", "fragola", "kiwi"]

    return (
        <>
            <ul>
                {
                    fruttaArray.map((frutto, index) => (
                        <li key={`frutto-item-${index}`}>{frutto}</li>
    	        ))}
            </ul>
        </>
    )
}

export default ItemList;