import Copyright from "./Copyright";

function Pear(props) {
    return (
        <div>
            <span>I dont like pears, but my friend {props.name} yes</span>
        <Copyright/>
        </div>
    );
}

export default Pear;