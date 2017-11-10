// import React from 'react'
// // import LoggedUser from "../pages/LoggedUser"
// import API from "../utils/API";
// import NavBar from "../NavBar/NavBar";



// class SignupForm extends React.Component {
    
//     constructor(props) {
//       super(props);
      
//       this.state = {
//         username: '',
//         password: '',
//         passwordConfirm: '',
//         currentUser:""
//       }
      
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
    
//     handleChange(e) {
//       e.target.classList.add('active');
      
//       this.setState({
//         [e.target.name]: e.target.value
//       });
      
//       this.showInputError(e.target.name);
//     }
    
//     handleSubmit(e) {    
//       e.preventDefault();
      
//       console.log('component state', JSON.stringify(this.state));
      
//       if (!this.showFormErrors()) {
//         console.log('form is invalid: do not submit');
//       } else {
//         console.log('form is valid: submit');

//         if (this.state.username && this.state.password && this.state.passwordConfirm) {
//           API.register({
//             username: this.state.username,
//             password: this.state.password
//           })
//             .then(res =>{
//               console.log(res)
//               if(res.data.user){
//                 //there could be a problem here
//                 this.props.history.push('/logged/'+res.data.id);
//               }
//               else {
//                 console.log("no user");
//               }
//               })
//               .catch(err => console.log(err));
//         }
//       }
//     }
    

//     showFormErrors() {
//       const inputs = document.querySelectorAll('input');
//       let isFormValid = true;
      
//       inputs.forEach(input => {
//         input.classList.add('active');
        
//         const isInputValid = this.showInputError(input.name);
        
//         if (!isInputValid) {
//           isFormValid = false;
//         }
//       });
      
//       return isFormValid;
//     }
    
//     showInputError(refName) {
//       const validity = this.refs[refName].validity;
//       const label = document.getElementById(`${refName}Label`).textContent;
//       const error = document.getElementById(`${refName}Error`);
//       const isPassword = refName.indexOf('password') !== -1;
//       const isPasswordConfirm = refName === 'passwordConfirm';
      
//       if (isPasswordConfirm) {
//         if (this.refs.password.value !== this.refs.passwordConfirm.value) {
//           this.refs.passwordConfirm.setCustomValidity('Passwords do not match');
//         } else {
//           this.refs.passwordConfirm.setCustomValidity('');
//         }
//       }
          
//       if (!validity.valid) {
//         if (validity.valueMissing) {
//           error.textContent = `${label} is a required field`; 
//         } else if (validity.typeMismatch) {
//           error.textContent = `${label} should be a valid email address`; 
//         } else if (isPassword && validity.patternMismatch) {
//           error.textContent = `${label} should be longer than 4 chars`; 
//         } else if (isPasswordConfirm && validity.customError) {
//           error.textContent = 'Passwords do not match';
//         }
//         return false;
//       }
      
//       error.textContent = '';
//       return true;
//     }
  
//     render() {
//       return (
//         <div>
//         <NavBar userInfo={this.state.currentUser} />
//         <form noValidate>
//          <div className="form-group">
//             <label id="usernameLabel">Username</label>
//             <input className="form-control"
//               type="username"
//               name="username"
//               ref="username"
//               placeholder="Yoda"
//               value={ this.state.username } 
//               onChange={ this.handleChange }
//               required />
//             <div className="error" id="usernameError" />
//         </div>
//           {/* <div className="form-group">
//             <label id="emailLabel">Email</label>
//             <input className="form-control"
//               type="email"
//               name="email"
//               ref="email"
//               placeholder="plumbingServices@nintendo.com"
//               value={ this.state.email } 
//               onChange={ this.handleChange }
//               required />
//             <div className="error" id="emailError" />
//           </div> */}
//           <div className="form-group">
//             <label id="passwordLabel">Password</label>
//             <input className="form-control"
//               type="password" 
//               name="password"
//               ref="password"
//               value={ this.state.password } 
//               onChange={ this.handleChange }
//               pattern=".{5,}"
//               required />
//             <div className="error" id="passwordError" />
//           </div>
//           <div className="form-group">
//             <label id="passwordConfirmLabel">Confirm Password</label>
//             <input className="form-control"
//               type="password" 
//               name="passwordConfirm"
//               ref="passwordConfirm"
//               value={ this.state.passwordConfirm } 
//               onChange={ this.handleChange }
//               required />
//             <div className="error" id="passwordConfirmError" />
//           </div>
//           <button className="btn btn-primary"
//             onClick={ this.handleSubmit }>submit</button>
//         </form>
//         </div>
//       );
//     }
//   }
  
//   export default SignupForm