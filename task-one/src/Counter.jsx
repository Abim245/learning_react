import { useState } from "react"

function Counter(){
    const [count, setCount] = useState(0)


    return (
        <div>
            <h1>{count}</h1>
            <button onClick= { ()=> setCount(count +1) } >
            increase
            </button>
            {  count >= 5 && 
                <p>keep going</p>
            }
            {count >= 10 &&
                <p>excellent</p>
            }
            <button onClick= { ()=> setCount(count -1) } >
            Decrease
            </button>
           {count <= 5 &&
                <p>keep pushing </p>
            }
            {count < 0 &&
                <p>too low</p>
            }
            <button onClick= { ()=> setCount(0) } >
            Reset
            </button>
             {count === 0 &&
                <p>sad</p>
            }
        </div>
    )
}

export default Counter;