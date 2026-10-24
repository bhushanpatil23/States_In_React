const ChildA = (props) => {


    function handleChildButtonClick(){
        props.handleChildButtonClick();
    }

  return (
    <div>
        <p>Child  count : {props.count}</p>
        <button onClick={handleChildButtonClick}> Child A Button</button>
    </div>
  )
}

export default ChildA