import { Navigate, useNavigate } from "react-router-dom";

function Subnav(){
    const navigate=useNavigate();
    return(
        <>
 <div className="main">

<h4 onClick={()=>navigate("/chats")}>Chats</h4>
<h4 onClick={()=>navigate("/status")}>Status</h4>
<h4 onClick={()=>navigate("/calls")}>Calls</h4>
</div>
        </>
    )
}

export default Subnav;
