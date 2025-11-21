import React from "react";
class Class extends React.Component{


    constructor(prop){
        super(prop)
        this.state = {count : 0}
    }


    componentDidMount(){
        console.log("Component will Mount")
    }

    componentDidUpdate(){
         console.log("Component will Update")
    }
    componentWillUnmount(){
        console.log("component will unmount")
    }


    render(){
    return(
        <div>
          <h1>React Life Cycle</h1>
          <p>count : {this.state.count}</p>
          <button onClick={()=> this.setState ({count : this.state.count + 1})}>+</button>
        </div>
        
    )
    }
}
export default Class;