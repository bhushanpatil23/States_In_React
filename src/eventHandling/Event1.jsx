import React from 'react'

const Event1 = () => {
  
    
    const handleClick = (e) => {
        alert('Button clicked!')
    }

    const onMousemove = (e) => {
        console.log('Mouse moved over button!')
    }

    const handleFormSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        console.log('Form submitted!');
    }

    const handleUsernameChange = (e) => {
        const username = e.target.value;
        console.log( username);
    }

  return (
    <div>
        {/* <button onClick={handleClick} onMouseMove={onMousemove}>
            Click me
        </button> */}

        <form onSubmit={handleFormSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name"  name="username" onChange={handleUsernameChange} /> 

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />

            <button type="submit">Submit</button>
        </form>

    </div>
  )
}

export default Event1