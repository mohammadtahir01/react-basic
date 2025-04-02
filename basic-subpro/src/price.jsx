

export default function Price({oldPrice, newPrice}) {
    return(
        <div id="price">
            <span id="price1">{oldPrice}</span>&nbsp;&nbsp; &nbsp;
            <span>{newPrice}</span>
        </div>
    )
}