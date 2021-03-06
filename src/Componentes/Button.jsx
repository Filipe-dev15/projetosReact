import React from "react";
import './Button.css'

export default props => {
    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple': ''

    return (
        <button
        onClick={e => props.click && props.click(props.label)}
        className={classes}> 
        {props.label}  
        </button>
    )
 
}
// aplicando variavel na classe de outra maneira
/*
export default props =>
<button className={`
button
${props.operation ? 'operation' :''}
${props.double ? 'double' :''}
${props.triple ? 'triple':''}

`}onClick={e=> props.click && props.click(e.target.innerHTML)}>  
{props.label}
</button>

*/