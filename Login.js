import {useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

function Login(){
    const[loginemail,setloginemail]=useState("");
    const[loginpassword,setloginpassword]=useState("");
    const[data,setdata]=useState([]);


    
    const clickloginaction=async(e)=>{
        e.preventDefault();
        if(loginpassword.length < 8) { 
          return (alert("Error: Password must be at least 8 characters"))
               } else if(loginpassword.search(/[a-z]/) < 0) { 
                return (alert("Error: Password must contain at least one lowercase letter"))
                 
    
                } else if(loginpassword.search(/[A-Z]/) < 0) { 
                  return (alert("Error: Password must contain at least one uppercase letter"))
                
                
                } else if(loginpassword.search(/[0-9]/) < 0) { 
                  return (alert("Error: Password must contain at least one number"))
             
                
                } else if(loginpassword.search(/[=.*@#$%^&-+=())(?=\\S+$]/) < 0) { 
                  return (alert("Error: Password must contain at least special character"))
                }else{

                  const res= await axios.post("http://localhost:8005/logindata",{
                    loginemail : loginemail,
                    loginpassword : loginpassword
                 })
               .then((res)=>{
              console.log("this is data")
            
                console.log(res.data.length)
                if(res.data.length==0){
                  console.log("Sorry , user is not exist , your login is fail, please try again")
                  setdata([""]);
                  document.getElementById("loginerror").innerHTML="Sorry , user is not exist , your login is fail, please try again"
                  document.getElementById("loginerror").style.color="red"
                }else{
                  console.log("Login is Successfull")
                
                
                  setdata(res.data[0])

                  document.getElementById("loginerror").innerHTML="Login is Successfull"
                  document.getElementById("loginerror").style.color="green"
                  
                }
                //  if(res.data == "Sorry , user is not exist , your login is fail, please try again"){
                //    console.log(res.data);
                //    setdata([""]);
                //  }
                //  else{
                //    console.log("Yeah! Your login is successfull");
                //      setdata(res.data[0])
                //  }
                
               })
               .catch((error)=>{
                 console.log(error)
               })

                }
         
        

    }
    return(
        <>
     <div className='App1'>
     <div className='regdiv'>
     
     <form onSubmit={clickloginaction} className='f1' name="login" >
     <div align="center" class="title">
     <h1>Login</h1>
            <label htmlFor="">Email</label>
             <input
               type="email"
               placeholder="Please enter your Email"
               class="form-control"
               // required
               onChange={(e)=>{setloginemail(e.target.value)}}
             /></div>
     
     
     <div align="center" class="title">
           <label htmlFor="">Password</label>
     
             <input
               type="password"
               name='password'
               placeholder="Please enter your password"
               class="form-control"
               onChange={(e)=>{setloginpassword(e.target.value)}}
             /></div>
             <div>
               
             {/* <button type="submit" class="btn btn-primary" onClick={()=>{<Link to="/profile"/>}}>Submit</button> */}
             {/* <Link to="/profile"> */}
               <button type="submit" class="btn btn-primary" >Submit</button>
               {/* </Link> */}
     
           </div>
     
     <br />
     <div>
       <p id="loginerror"></p>
     </div>
           <div className='isha'>
     
     <label>Not registered yet?</label>
     <br />
     {<Link to="/registration" >Please click here to register </Link>}
     </div>
     <br />
     
      
     
     </form>
             </div>
     </div>
        </>
    )
}

export default Login;
