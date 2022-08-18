import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
const SignUp = ()=>{
    const [username, setUserName] = useState("");
    const [password, setPassWord] = useState("");
    const [passwordRe, setPassWordRe] = useState("");
    const [errors, setErrors] = useState("");
    const [login, setLogin] = useState(false);
    const [userId, setUserId] = useState("");
    let navigate = useNavigate();
    const handleUserName = (e:string):void => {
        setUserName(e)
      };
      const handlePassword = (e:string): any => {
        setPassWord(e)
      };
      const handleRetypePassword =(e:string): any => {
        setPassWordRe(e)
      };

      const SignUp=()=>{
            if(password !== passwordRe){
                setErrors("Passwords don't match")
            }
            else{
                const requestOptions = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify([{ username: username, password: password }]),
                  };
                //   https://apple-tart-39767.herokuapp.com
                  fetch("https://apple-tart-39767.herokuapp.com/signup", requestOptions)
                    .then((res) => res.json())
                    .then((res1) => {
                      if (res1.success) {
                        setLogin(true);
                        setUserId(res1.userId);
                        navigate("/customGame");
                        // let gameOptions = {
                        //   method: "POST",
                        //   headers: { "Content-Type": "application/json" },
                        //   body: JSON.stringify([{ userId: userId, gameName: "firstGame" }]),
                        // };
                      } else {
                        setErrors(res1.errorMessage);
                      }
                    });
            }
      }
    return (<div className="loginPage">
      <div className="upmargin">
        <h1 className="headingLogin">Sign Up</h1>
      </div>
      <form>
        <div className="upmargin">
          <label>
            Username:
            <input
              type="text"
              name="username"
              onChange={(e)=>handleUserName((event.target as HTMLInputElement).value)}
            />
          </label>
        </div>
        <div className="upmargin">
          <label>
            Password:
            <input
              type="password"
              name="password"

               onChange={(e)=>handlePassword((event.target as HTMLInputElement).value)}
            />
          </label>
        </div>
        <div className="upmargin">
          <label>
            Retype Password:
            <input
              type="password"
              name="password"

               onChange={(e)=>handleRetypePassword((event.target as HTMLInputElement).value)}
            />
          </label>
        </div>
      </form>
      {errors}
      <button onClick={()=>{SignUp()}}>Sign Up</button>
      </div>)
}
export default SignUp