import React,{Component} from "react"
import NavBar from "../NavBar/NavBar";
import Btncontrol from "../Btncontrol/Btncontrol";
import Gamecontainer from "../Gamecontainer/Gamecontainer";
import API from "../utils/API";

class Userlog extends Component{
 
    constructor(props){
        super(props)

        this.state={
            currentUser:"",
            score:""
        }
    }

componentDidMount(){
    //fetch current user's info from DB
    //API req with props.username and props.score
    //setState {()}
 console.log(this.props.match.params.id);

    API.getUserPop(this.props.match.params.id)
    .then(res => {
      if (res.data.statusCode === 401) {
        this.props.history.push("/login");
      }
      else {
        // console.log("Userlog res.data.user: ", res.data.score);
        // console.log("Userlog score object: "+Object.keys(res));
        // console.log("");
        //there could be a  err here
        this.setState({ currentUser: res.data.username })

API.getScore(res.data.score)
.then(res2=>{
    if(res2.data){
        // console.log("API.getScore: "+Object.keys(res2.data.results.score));
        this.setState({score: res2.data.results.score})
    }
})

      }
    })
    .catch(err => console.log(err));
}

componentWillUpdate(){
    //update state everytime there is a change in the database 
}

render(){
    return(
 <div>
<NavBar userInfo={this.state.currentUser}  />
 <span><h2 style={{color:'#f7fcfc'}}>{this.state.username}</h2></span><span><h2 style={{color:'white'}}>{`Your Last Score was: ${this.state.score}`}</h2></span>
<Gamecontainer> 
<Btncontrol />
</Gamecontainer>
 </div>
    )
}


}

export default Userlog



