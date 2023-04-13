const ModeToggler = props => {
    let darkModeOn = false;
    const darkMode = <h1>Dark mode is on!</h1>
    const lightMode = <h1>Light mode is on!</h1>

    function handleClick () {
        darkModeOn = !darkModeOn;
        darkModeOn ? console.log("Dark mode is on!") : console.log("Light mode is on!");
    }

    return (
        <>
            {darkModeOn ? darkMode : lightMode}
            <button onClick={handleClick}>Toggle Mode</button>
        </>
    );
};

export default ModeToggler;