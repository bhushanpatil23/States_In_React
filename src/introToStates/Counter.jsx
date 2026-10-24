import  { useState } from 'react'

const Counter = () => {

    const [counter, setCounter] = useState(0);

    async function increaseCounter() {

        setCounter((prevCounter) => prevCounter + 1); // 0 + 1 = 1
        setCounter((prevCounter) => prevCounter + 1); // 1 + 1 = 2
        setCounter((prevCounter) => prevCounter + 1); // 2 + 1 = 3
        setCounter((prevCounter) => prevCounter + 1); // 3 + 1 = 4

        // setCounter((prevCounter) => prevCounter + 1); // 0 + 1 = 1
        // //1st render happens here, counter = 1
        // await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait for 1 second
        // setCounter((prevCounter) => prevCounter - 1); // 1 - 1 = 0
        // //2nd render happens here, counter = 0

        console.log(counter); // This will log the value of counter before the state updates
    }

    function decreaseCounter() {
        setCounter((prevCounter) => Math.max(prevCounter - 1, 0));
    }

    console.log('Counter component rendered!');

  return (
    <div>
        
        <p>{counter}</p>
        
        {/* {counter > 0 && (
            <button onClick={decreaseCounter}>Decrease Counter</button>
        )} */}
       
        <button onClick={increaseCounter}>Increase Counter</button>
        

    </div>
  )
}

export default Counter