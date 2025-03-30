import Title from "./Title";

function Subparagraph(){
    return (
        <div>
      {/* <Title project="Phone" price="20k"/> //this is a string type */}
      {/* <Title project="Laptop" price={30000}/> //this is a number type */}
      <Title project="Phone" price={20000}/>
      <Title project="Laptop" price={30000}/>
      <Title project="Copy" price={10}/>
    </div>
    )
}

export default Subparagraph;