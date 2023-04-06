import { Navigate, useNavigate } from "react-router-dom";

function Nav(){
    const navigate = useNavigate();

    return(
        <>
        <div>
        <div>
        <h2>IshApp</h2>
        </div>
        <div className="reglog">
            <button onClick={()=>navigate("/registration")} className="btn btn-success">Registration</button>
            <button style={{marginLeft:"5px"}}  onClick={()=>navigate("/login")} className="btn btn-success">Login</button>
        </div>
      
        </div>
        </>
    )
}

export default Nav;
