import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { login, signup } from "../../firebase";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const user_auth = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      if (signState === "Sign In") {
        await login(email, password);
      } else {
        await signup(name, email, password);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login">
      <img src={logo} className="login-logo" alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form onSubmit={user_auth}>
          {signState === "Sign Up" && (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Your name"
              required
            />
          )}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            required
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Processing..." : signState}
          </button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New to Netflix?
              <span onClick={() => setSignState("Sign Up")}> Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have an account?
              <span onClick={() => setSignState("Sign In")}> Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;




















// import React, { useState } from "react";
// import "./Login.css";
// import logo from "../../assets/logo.png";
 

// const Login = () => {
//   const [signState, setSignState] = useState("Sign Up");
 
   

//   return (
//     <div className="login">
//       <img src={logo} className="login-logo" alt="" />
//       <div className="login-form">
//         <h1>{signState}</h1>
//         <form>
//           {
//             signState==="Sign In"
//             ? <input type="text" placeholder="Your name" required />
//             :<></>
//           }
          
//           <input type="email" placeholder="Email" required />
//           <input type="password" placeholder="Password" required />
//           <button>{signState}</button>
//           <div className="form-help">
//             <div className="remember">
//               <input type="checkbox" required />
//               <label htmlFor="">Remember me</label>
//             </div>
//             <p>Need Help?</p>
//           </div>
//         </form>
//         <div className="form-switch">
//           {
//             signState==="Sign In"
//             ? <p>New to Netflix?<span onClick={()=>setSignState("Sign Up")}> Sign Up Now</span></p>
//             : <p>Already have an account?<span onClick={()=>setSignState("Sign In")}> Sign In Now</span></p>
//           }
        
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
