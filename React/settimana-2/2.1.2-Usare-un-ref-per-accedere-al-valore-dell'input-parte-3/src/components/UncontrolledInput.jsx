import { useRef } from "react";

const UncontrolledInput = () => {
    const inputRef = useRef(null);

    const handleClick = () => {
        const inputText = inputRef.current.value;
        alert(`${inputText}`)
    }

    return (
        <>
            <input ref={inputRef} type="text" />
            <button onClick={handleClick}>Clicka quì per sapere il tuo valore attuale</button>
        </>
    )
}

export default UncontrolledInput;