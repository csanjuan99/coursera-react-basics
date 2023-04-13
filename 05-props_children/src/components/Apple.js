const Apple = props => {
    return (
        <div>
            <span>You have: {props.number} apple's</span>
            <hr/>
            <span style={{color: 'black'}}>{ props.number > 1 ? 'true' : 'false' }</span>
        </div>
    );
}

// function Apple(props) {
//   return (
//     <div>
//         <span>You have: {props.number} apple's</span>
//     </div>
//   );
// }

export default Apple;