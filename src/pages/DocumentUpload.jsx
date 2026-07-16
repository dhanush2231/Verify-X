import {useState} from "react";
import "../css/DocumentUpload.css";


function DocumentUpload(){


const [file,setFile]=useState("");



return(

<div>


<h1>Upload Document</h1>


<input

type="file"

accept="application/pdf"

onChange={(e)=>

setFile(e.target.files[0])

}

/>


{

file &&

<p>

Uploaded : {file.name}

</p>

}


</div>


)


}


export default DocumentUpload;