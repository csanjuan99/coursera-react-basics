import Bowl from "./Bowl";

function Puppy(props) {
    return (
        <div>
            {props.name} has <Bowl bowlShape={props.bowlShape} bowlStatus={props.bowlStatus} />
        </div>
    );
};

export default Puppy;