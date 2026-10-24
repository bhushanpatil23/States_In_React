import {useState} from 'react'
import ChildA from './ChildA';
import ChildB from './ChildB';

const Parent = () => {

    const[countParent, setCountParent] = useState(0);

    
    function handleChildButtonClick(){
        setCountParent(prevCountParent => prevCountParent+1);
    }

  return (
    <div>
        <p>Inside Parent : {countParent}</p>
        <ChildA
            count={countParent} 
            handleChildButtonClick={handleChildButtonClick} />
        <ChildB count={countParent} />
    </div>
  )
}

export default Parent