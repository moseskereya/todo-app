import React, { Component } from 'react';  
class App extends Component {  
    constructor(props) {  
        super(props);  
        this.state = {  
            personGoing: true,  
            numberOfPersons: 5  
        };  
        this.handleInputChange = this.handleInputChange.bind(this);  
   }  
   handleInputChange(event) {  
       const target = event.target;  
       const value = target.type === 'checkbox' ? target.checked : target.value;  
       const name = target.name;  
       this.setState({  
           [name]: value  
       });  
  }  
  render() {  
      return (  
          <form>  
              <h1>Multiple Input Controlled Form Example</h1>  
              <label>  
                  Is Person going:  
                  <input  
                    name="personGoing"  
                    type="checkbox"  
                    checked={this.state.personGoing}  
                    onChange={this.handleInputChange} />  
             </label>  
             <br />  
             <label>  
                 Number of persons:  
                 <input  
                 name="numberOfPersons"  
                 type="number"  
                 value={this.state.numberOfPersons}  
                 onChange={this.handleInputChange} />  
             </label>  
         </form>  
     );  
  }  
}  
export default App;  



// import React, { Component } from 'react'; 
// class App extends Component {  
//   constructor(props) {  
//       super(props);  
//       this.updateSubmit = this.updateSubmit.bind(this);  
//       this.input = React.createRef();  
//   }  
//   updateSubmit(event) {  
//       alert('You have entered the UserName and CompanyName successfully.');  
//       event.preventDefault();  
//   }  
//   render() {  
//     return (  
//       <form onSubmit={this.updateSubmit}>  
//         <h1>Uncontrolled Form Example</h1>  
//         <label>Name:  
//             <input type="text" ref={this.input} />  
//         </label>  
//         <label>  
//             CompanyName:  
//             <input type="text" ref={this.input} />  
//         </label>  
//         <input type="submit" value="Submit" />  
//       </form>  
//     );  
//   }  
// }  
// export default App;  



// forceupdate
// import React, { Component } from 'react';
// import styles from "./App.css"
// class App extends Component {
//     constructor(props) {
//         super(props);
//    this.forceUpdateState = this.forceUpdateState.bind(this)
//     }

//     forceUpdateState = () =>{
//         this.forceUpdate()
//     }
//     render() { 
//         return ( 
//             <div className="random">
//                 <h4>Random{Math.random()}</h4>
//                 <button type="submit" onClick={this.forceUpdateState} className="btn">Add</button>
//             </div>
//          );
//     }
// }
 
// export default App;


//force update
// import React, { Component } from 'react';
// import  styles from "./App.css"
// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             msg:"is anyone inside please"
//           }
//   this.updateState = this.updateState.bind(this)
//     }

//     updateState(){
//         this.setState({msg:"its nice to study hard and to learn things in deep"});
//     }
//     render() { 
//         return ( 
//             <div className="moses">
//                 <h2>{this.state.msg}</h2>
//                 <button type="submit" onClick={this.updateState}>change</button>
//             </div>
//          );
//     }
// }
 
// export default App;



// import React, { Component } from 'react';
// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { name:"is anyone there please" }
//     }
//     handleEvent = () =>{
//         this.setState({name: "no please there is nop body here"})
//     }
//     render() { 
//         return ( 
//             <div>
//                 <h3>hello {this.state.name}</h3>
//                 <button type="submit" onClick={this.handleEvent}>change</button>
//             </div>
//          );
//     }
// }
 
// export default App;


// import React,{Component} from 'react';
// import  "./App.css";
// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             data:"https://codepen.io"
//          }
//          this.handleEvent = this.handleEvent.bind(this)
//     }
// handleEvent(){
//  console.log(this.props)
// }

//     render() { 
//         return ( 
//             <div className="new">
//                 <h4>hello{this.props.name}</h4>
//                 <input value={this.state.data} /><br/>
//                 <button type="sumit" onClick={this.handleEvent} >please click</button>
//             </div>
//          );
//     }
// }
 
// export default App;








// import React, {Component} from 'react'
// class App extends Component {
//     state = { name:"red",
// hello:"do you see my color there" }
//     render() { 
//         return ( 
//             <div>
//                 <h3>hello again {this.props.name ? "true" : "false"}</h3>
//             </div>
//          );
//     }
// }
 
// export default App;




























// import React, { Component } from 'react';
// class Show extends Component {
//     state = { greatings:"hello red car this is greatings from state",
//     year: 2019,
//  }
//  change = () =>{
//      this.setState({year:this.state.year * 20})
//  }
//     render() { 
//         return ( 
//             <div>
//                 <h3>{this.state.year}</h3>
//                 <button type="button" onClick={this.change}>click</button>
//             </div>
//          );
//     }
// }
 
// export default Show;

// life circles