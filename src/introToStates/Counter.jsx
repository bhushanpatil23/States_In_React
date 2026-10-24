

const Counter = () => {

    let counter = 0;

    function increaseCounter() {
        counter++;
        console.log(counter);
    }
  return (
    <div>
        
        <p>{counter}</p>
        
        <button onClick={increaseCounter}> Increase Counter</button>

    </div>
  )
}

export default Counter