import React, {useState, useContext} from 'react';


import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../store/FirebaseContext';
import { useHistory } from 'react-router-dom';

export default function Signup() {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const {firebase} = useContext(FirebaseContext)

  // const handleSubmit = (e) =>{
  //   e.preventDefault()
  //   console.log(firebase)
  //   firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
  //     console.log("Worked1"+result.user.username)
  //     result.user.updateProfile({displayName:username}).then(()=>{
  //       console.log("Worked2")
  //       firebase.firestore().collection('users').add({
  //         id:result.user.uid,
  //         username:username,
  //         phone:phone
  //       }).then(()=>{
  //         console.log("Worked3")
  //         //history.push("/login")
  //         window.location.href = "/login";
  //       })
  //     })
  //   })

  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firebase);
  
    firebase.auth().createUserWithEmailAndPassword(email, password).then((result) => {
      console.log("Worked1 uid = ", result.user.uid); // Access display name using displayName property
      result.user.updateProfile({ displayName: username }).then(() => {
        console.log("Worked2");
        firebase.firestore().collection('users').add({
          id: result.user.uid,
          username: username,
          phone: phone
        }).then(() => {
          console.log("Worked3");
          history.push("/login")
          // window.location.href = "/login";
        });
      });
    });
  }


  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue=""
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="email"
            name="email"
            defaultValue=""
          />
          <br />
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            id="phone"
            name="phone"
            defaultValue=""
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="password"
            name="password"
            defaultValue=""
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a onClick={()=>(window.location.href="/login")}>Login</a>
      </div>
    </div>
  );
}
