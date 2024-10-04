import React from "react";
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      hour:[],
    }
    setInterval(()=>{
      this.setState({hour:Date().split(" ")[4]})
    },1000)
  }
  
    render(){
      return(
        <>
        <div id='maindiv'> 
          
          <div id='container'>
            <div id='time'>
            <h1>{this.state.hour}</h1>
            </div>
            </div>
            </div>
        </>

      )
    }
}


export default App;
