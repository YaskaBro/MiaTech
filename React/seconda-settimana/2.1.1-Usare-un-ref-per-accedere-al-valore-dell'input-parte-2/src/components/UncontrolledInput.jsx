import { useRef } from "react";

const UncontrolledInput = () => {
    const inputRef = useRef(null);

    return (
        <>
            <input ref={inputRef} type="text" />
        </>
    )
}

export default UncontrolledInput;