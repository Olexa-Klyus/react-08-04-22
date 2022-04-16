import {useRef} from "react";

const Form1 = () => {
    const name=useRef();
    const age=useRef();

    // за допомогою ref= підвязуємо input до змінних, тобто
    // змінні name і age і будуть нашими інпутами

    const mySubmit = (e)=> {
        e.preventDefault()
        const curName= name.current.value;
        const curAge = age.current.value;
        const user = {curName, curAge};
        console.log(user);
    }

    return (
        <form onSubmit={mySubmit}>
            <div><label>Name:<input type="text" ref={name}/></label></div>
            <div><label>Age:<input type="number" ref={age}/></label></div>
            <button>save</button>
        </form>
    );
};

export {Form1};