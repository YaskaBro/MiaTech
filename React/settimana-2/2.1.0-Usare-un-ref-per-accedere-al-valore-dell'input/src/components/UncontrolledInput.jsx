
const UncontrolledInput = () => {
    const input = (event) => {
        
        const inputText = event.target.value;

        console.log(inputText)
    }

    return (
        <>
            <input onChange={input} type="text" />
        </>
    )
}

export default UncontrolledInput;