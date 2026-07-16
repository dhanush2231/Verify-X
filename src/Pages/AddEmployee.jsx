import {useState} from "react";

import "../css/AddEmployee.css";


function AddEmployee(){


const [name,setName] = useState("");

const [employees,setEmployees] = useState([]);


const [editId,setEditId] = useState(null);



function addEmployee(){


if(name===""){
return;
}



if(editId){


const updated = employees.map((emp)=>

emp.id===editId

?

{
...emp,
name:name
}

:

emp

);


setEmployees(updated);

setEditId(null);


}



else{


setEmployees([

...employees,

{
id:employees.length+1,
name:name
}

]);


}



setName("");

}





function editEmployee(emp){


setName(emp.name);

setEditId(emp.id);


}





function deleteEmployee(id){


const filtered = employees.filter(

(emp)=>

emp.id!==id

);


setEmployees(filtered);


}





return(


<div className="employee-container">



<h1>Candidate</h1>




<input


type="text"

placeholder="Candidate Name"


value={name}


onChange={(e)=>setName(e.target.value)}


/>




<button onClick={addEmployee}>


{

editId ? "Update" : "Add"

}


</button>





<h2>Employee List</h2>





<table>


<thead>


<tr>


<th>ID</th>


<th>Name</th>


<th>Action</th>


</tr>


</thead>





<tbody>



{

employees.map((emp)=>(



<tr key={emp.id}>


<td>

{emp.id}

</td>



<td>

{emp.name}

</td>




<td>



<button

onClick={()=>editEmployee(emp)}

>

Edit

</button>




<button

onClick={()=>deleteEmployee(emp.id)}

>

Delete

</button>



</td>



</tr>



))


}




</tbody>



</table>




</div>


)



}



export default AddEmployee;