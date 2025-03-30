import "./Product.css"

function Procduct({Title,Price,features}){ //destructuring Props
    // console.log(Props);
   let list = features.map((feature) => <li>{feature}</li>);
    console.log(list);
    return(
        <div id="Procduct">
            <h4>{Title}</h4>
            <p>Price : {Price}</p>
            {/* <p>{features}</p> */}
            <p>feature :{list}</p>
            {/* <p>{features2.a}</p> */}
        </div>
    )
}

export default Procduct