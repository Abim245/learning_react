function Fruit(){
    const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
    return (
        <div>
            {fruits.map((fruit, index) => (
                <p key = {index}>{fruit}</p>
            ))} 
        </div>
    )
}

export default Fruit;