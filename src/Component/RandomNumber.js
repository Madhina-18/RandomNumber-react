import { useState } from "react"

function RandomNumber() {
    
    var [random,randomnum] = useState(0)


    function randomnumber()
    {
         randomnum(Math.floor(Math.random()* 100)+1) 
    }

    function reset()
    {
        randomnum(0)
    }
    
    return (
        <div className="Counter__container">

            <div className="Counter__heading">
                <h1 style={{ marginTop: "20px" }}>RANDOM NUMBER GENARATE APP</h1>
            </div>


            <div className="Counter__Counting">

                <h1 style={{ cursor: "pointer" }}>{random}</h1>

            </div>




            <div className="Counter__btn">


                <button onClick={randomnumber} style={{ width: "400px", borderRadius: "20px", height: "60px", border: "solid black 3px", cursor: "pointer", backgroundColor: "green" }}> Random Number Genarnate </button>
            </div>



            <div className="reset__btn">
                <button   onClick={reset} style={{ border: "solid black 3px", padding: "10px", borderRadius: "10px", cursor: "pointer", backgroundColor: "red" }}>Reset</button>

            </div>





        </div>
    )
}


export default RandomNumber