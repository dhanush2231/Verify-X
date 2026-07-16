import {useState} from "react";
import "../css/Documents.css";


function Documents(){


const [document,setDocument] = useState("");

const [file,setFile] = useState(null);



function proceed(){


if(document && file){

alert(
"Document uploaded successfully"
);

}

else{

alert(
"Please select document and file"
);

}


}



return(


<div className="box">


<h1>Documents</h1>



<label>
Select Document
</label>


<br/>


<select

value={document}

onChange={(e)=>setDocument(e.target.value)}

>


<option value="">
Choose Document
</option>


<option>
Salary Slip
</option>


<option>
Offer Letter
</option>


<option>
Experience Letter
</option>


<option>
ID Proof
</option>


<option>
Bank Statement
</option>



</select>



<br/><br/>



<label>
Choose File
</label>


<br/>


<input


type="file"


onChange={(e)=>

setFile(e.target.files[0])

}


/>



<br/>



{
file &&

<p>

Selected File : {file.name}

</p>

}



<button

onClick={proceed}

>

Proceed

</button>



</div>


)


}


export default Documents;