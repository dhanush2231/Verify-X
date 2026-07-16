import "../css/sidebar.css";


function Sidebar({setPage}){


return(


<div className="sidebar">


<h2>
Admin Panel
</h2>



<button onClick={()=>setPage("employee")}>

Add Employee

</button>




<button onClick={()=>setPage("documents")}>

Documents

</button>




<button onClick={()=>setPage("reports")}>

Reports

</button>



</div>


)


}


export default Sidebar;