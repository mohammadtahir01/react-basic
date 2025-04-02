import Title from "./title.jsx"

export default function All(){
    return (
        <div id="all">
            <Title title="Mobile" idx={0}/>
            <Title title="Laptop" idx={1}/>
            <Title title="Electric" idx={2}/>
        </div>
    )
}