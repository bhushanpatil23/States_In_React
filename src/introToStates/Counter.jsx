import  { useState } from 'react'

const Counter = () => {

    const [counter, setCounter] = useState(0);

    function increaseCounter() {
        setCounter((currentCounter) => Math.min(currentCounter + 1, 5));
        //console.log('Counter increased to:', counter + 1); // Log the updated counter value
    }

    function decreaseCounter() {
        setCounter((currentCounter) => Math.max(currentCounter - 1, 0));
    }

    console.log('Counter component rendered!');

  return (
    <div>
        
        <p>{counter}</p>
        
        {counter > 0 && (
            <button onClick={decreaseCounter}>Decrease Counter</button>
        )}
        {counter < 5 && (
            <button onClick={increaseCounter}>Increase Counter</button>
        )}

    </div>
  )
}

export default Counter