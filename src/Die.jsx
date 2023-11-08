/* eslint-disable react/prop-types */

export default function Die(props) {

    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    console.log(styles)
    return (
        <div className="die-face" style={styles}>
            <h2 className="die-num">{props.n}</h2>
        </div>
    )
}