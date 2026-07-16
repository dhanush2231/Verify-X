import "../css/Profile.css";
function Profile(){

const admin={

name:"Admin User",

role:"HR Manager",

email:"admin@gmail.com"

}


return(

<div>


<h1>Profile</h1>


<h3>{admin.name}</h3>

<p>{admin.role}</p>

<p>{admin.email}</p>



</div>


)


}


export default Profile;