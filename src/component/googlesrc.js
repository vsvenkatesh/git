import React, { Component } from "react";
// import Login from "./login/login";
// import LoginForm from "./login/login";
import "./App.css";
// import search from "./search";
// import { Link, withRouter } from "react-router-dom";
import tableicon from './tableicon.svg';

//import images from './images';

const Welcome = ({ fifa, onSignOut }) => {
  //   var test2 = localStorage.getItem("session2");
  // var objc = JSON.parse(test2);
  // var final = objc[0];
  // console.log("object is",final);
  // var movies = JSON.parse(test2);
  var test = localStorage.getItem("test");
  /// let array = [];
  // array=finals[i];
  // localStorage.setItem("testing", array);
  // }
  // var array = localStorage.getItem("testing")
  //         let images = array.map(image => {
  //            return <img key={image} src={image} alt="" className="img-responsive" />
  //         });
  // }
  //   This is a dumb "stateless" component
  //   var test33 = localStorage.getItem("images");
  //   var len=test33.length;
  //   var name=new Array();
  // name[len];
  // for(var i=0;i<len;i++)
  // {
  // var name = test33[i].location;
  // console.log("location are are",name);
  // }
  //   console.log("another location are are",finals);
  //   var unr="http://localhost:4000/public/images/xman.jpg";
  return (
    <div className="hello">
      Hello <strong>{test}</strong> !!!/<a
        id="hr"
        href="javascript:;"
        onClick={onSignOut}
      >
        Sign out
      </a>
    </div>
  );

  // var Hello = React.createClass({
  // render: function() {
  //   <img src="http://localhost:4000/public/images/xman.jpg" />
  //   var names = ['Jake', 'Jon', 'Thruster'];
  //   return (
  //   <div className="hello">
  //             <ul>
  //                     {names.map(function(name, index){
  //                     return <li key={ index }>{name}</li>;
  //                   })}
  //             </ul>

  //     </div>

  //   )
  // }
  // });
};


const session = ({ fifa, onSignOut }) => {
  //   var test2 = localStorage.getItem("session2");
  // var objc = JSON.parse(test2);
  // var final = objc[0];
  // console.log("object is",final);
  // var movies = JSON.parse(test2);
  var test = localStorage.getItem("test");
  /// let array = [];
  // array=finals[i];
  // localStorage.setItem("testing", array);
  // }
  // var array = localStorage.getItem("testing")
  //         let images = array.map(image => {
  //            return <img key={image} src={image} alt="" className="img-responsive" />
  //         });
  // }
  //   This is a dumb "stateless" component
  //   var test33 = localStorage.getItem("images");
  //   var len=test33.length;
  //   var name=new Array();
  // name[len];
  // for(var i=0;i<len;i++)
  // {
  // var name = test33[i].location;
  // console.log("location are are",name);
  // }
  //   console.log("another location are are",finals);
  //   var unr="http://localhost:4000/public/images/xman.jpg";
  return (
    <div className="hello">
      Hello <strong>{test}</strong> !!!/<a
        id="hr"
        href="javascript:;"
        onClick={onSignOut}
      >
        Sign out
      </a>
    </div>
  );

  // var Hello = React.createClass({
  // render: function() {
  //   <img src="http://localhost:4000/public/images/xman.jpg" />
  //   var names = ['Jake', 'Jon', 'Thruster'];
  //   return (
  //   <div className="hello">
  //             <ul>
  //                     {names.map(function(name, index){
  //                     return <li key={ index }>{name}</li>;
  //                   })}
  //             </ul>

  //     </div>

  //   )
  // }
  // });
};

class googlesrc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      fifa: ""
    };
  }
  handleSignIn(e) {
    e.preventDefault();
    let term = this.refs.username.value;
    //   var data = {"username": term,
    //   "password": "456"};
    // fetch( "http://localhost:3003/images", {
    //   method: 'POST',
    //   headers: {
    //       'Content-Type': 'application/json',
    //   },
    //      body: JSON.stringify(data),
    //   })
    this.onChangeInput(term);
  }

  onChangeInput(term) {
    const component = this;
    console.log("username", term);
    var data = {
      username: term,
      password: "456"
    };
    fetch("https://api.flickr.com/services/rest/?api_key=a1c4d1ff7f95e63effb5754ac37d9226&method=flickr.photos.search&text="+term+"&format=json", {
      method: "POST"
    }).then(function(response) {
      return response.json()
      .then(function(body) {
        console.log("response is",response.data);
        if (body == "") {
          console.log("no values came%%%%");
        } else {
          console.log("Goteddddd values!!!");
        }
        component.setState({
          fifa: body
        });
      });
    });
  }

  signOut() {
    this.props.history.push("/");
    localStorage.clear();
  }

  gonext() {

this.props.history.push({
            pathname: "/add-imagess/imgs/1",
            table: this.state.table
          })
  }

  render() {
    return (
      <div>
        {this.state.fifa ? (
          this.props.history.push({
            pathname: "/search",
            fifa: this.state.fifa
          })
        ) : (
          <Welcome
            onSignOut={this.signOut.bind(this)}
            //fifa={this.state.fifa}
            //user={this.props.location.user ? this.props.location.user.username : null}
            //onSignOut={this.signOut.bind(this)}
            //var val={this.props.location.user.username}
            //test={this.props.location.test}
          />
        )}
         <button onClick={this.gonext.bind(this)} className="buttable2">Table</button>
        <div id="Search">
          <form onSubmit={this.handleSignIn.bind(this)}>
            <center>
              <input
                type="text"
                id="box"
                ref="username"
                placeholder="Image"
              />
            </center>
            <center>
              <button class="button">Search</button>
            </center>
<session
           onSignOut={this.signOut.bind(this)} 
           />
          </form>
          
        </div>
      </div>
    );
  }
}
export default googlesrc;
