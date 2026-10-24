import {useState} from 'react'

const Parent = () => {

    const[count, setCount] = useState(0);

    function handleParentButtonClick() {
        setCount(prevCount => prevCount + 1);
        console.log("Parent Button Clicked");
    }

  return (
    <div>
        <p>Inside Parent : {count}</p>
        <button onClick={handleParentButtonClick}>Parent Button</button>
        <Child count={count} />
    </div>
  )
}

export default Parent