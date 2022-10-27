
function ReusableHTML (){
    return <div>
        <h1>Hi, welcome back</h1>
        <h2>this is a custom html component</h2>
        <h3>A reusable pice of html code</h3>
    </div>
}

ReactDOM.render(<ReusableHTML/>, document.querySelector("#root"))