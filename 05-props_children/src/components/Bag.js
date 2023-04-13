import bag from "../css/bag.css"

// it's works like slot in Vue.js
function Bag(props) {
    // const bag = {
    //     width: "200px",
    //     height: "200px",
    //     border: "1px solid black",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     flexDirection: "column",
    //     margin: "0 auto",
    //     backgroundColor: "yellow"
    // }
    return (
        <div className="bag">
            {props.children}
        </div>
    )
}

export default Bag