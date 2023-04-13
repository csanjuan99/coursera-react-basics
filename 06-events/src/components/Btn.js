const Btn = () => {
    function handleClick() {
        alert("I was clicked!");
    }
    return (
        <button onClick={handleClick}>
            <span>Click Me!</span>
        </button>
    );
};

export default Btn;