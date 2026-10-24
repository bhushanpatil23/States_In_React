const ChildA = (props) => {
    const steps = 5;
    return (
        <button onClick={(e) => props.handler(steps, e)}>Click Me Child A</button>
    )
}

const ChildB = (props) => {
    return (
        <button onClick={props.handler}>Click Me Child B</button>
    )
}

const Event2 = () => {

    const walking = (steps, e) =>{
        alert(`Going for a walk with ${steps} steps!`);
        e.stopPropagation(); // Stop the event from propagating to the parent
    }

    const eating = () => {
        alert('Eating!')
    }

  return (
    <div onClick={() => alert('Clicked from Parent!')}>
        <ChildA  handler= {walking}/>
        <ChildB handler={eating} />
    </div>
  )
}

export default Event2