// import React,{Component} from "react"
// import Btncontrol from "../Btncontrol/Btncontrol";
// import Gamecontainer from "../Gamecontainer/Gamecontainer";

// class UserView extends Component{
 
//     constructor(props){
//         super(props)

//         this.state={
//             username:"pepe",
//             score:"33"
//         }
//     }

// componetDidMount(){
//     //fetch current user's info from DB
//     //API req from props.username and props.score
//     //setState {()}
//     API.getSaved()
//     .then((articleData) => {
//       this.setState({ savedArticles: articleData.data });
//       console.log("saved results", articleData.data);
//     });
// }

// componetWillUpdate(){
//     //update state everytime there is a change in the database 
// }

// render(){
//     return(
//  <div>
//  <span><h2>{this.state.username}</h2></span><span><h2>{this.state.score}</h2></span>
// <Gamecontainer> 
// <Btncontrol />
// </Gamecontainer>
//  </div>
//     )
// }


// }

// export default UserView