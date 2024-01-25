import React from "react"


function Anji(){

    let[fn,setFn]=React.useState('');
    let[ln,setLn]=React.useState('');
    let[age,setAge]=React.useSt444ate('');
    let[city,setCity]=React.useState('');
    let[gender,setGender]=React.useState('');
    let[languages,setLanguages]=React.useState('');
    let[users,setUser]=React.useState([]);
    
    const handlecheckbox=(event)=>{
        if(event.target.checked){
            setLanguages([...languages,event.target.value])
        }
        else{
            let rl=languages.filter((lang)=>{
                return lang!==event.target.value;
            })
            setLanguages(rl);
        }
    }

    const save=()=>{
        let userObj={
            firstname:fn,
            lastname:ln,
            age:age,
            city:city,
            gender:gender,
            languages:languages
        }
        console.log(userObj);
    }
    return(
     <>
    <div>
        <label>Firstname:</label>
        <input type="text" onKeyUp={(e)=>{setFn(e.target.value)}}/>
    </div>
    <div>
    <label>laststname:</label>
    <input type="text" onKeyUp={(e)=>{setFn(e.target.value)}}/>
    </div>
    <div>
        <label>Age</label>
        <input type="text" onKeyUp={(e)=>{setFn(e.target.value)}}/>
    </div>
    <div>
        <label>City</label>
        <input type="text" onKeyUp={(e)=>{setFn(e.target.value)}}/>
    </div>
    <div>
        <label>Gender</label>
        <input type="radio" name="gender" value="male" onChange={(e)=>{setGender(e.target.value)}}/><label>Male</label>
        <input type="radio" name="gender" value="female" onChange={(e)=>{setGender(e.target.value)}}/><label>Female</label>
        <input type="radio" name="gender" value="other" onChange={(e)=>{setGender(e.target.value)}}/><label>Other</label>
    </div>
    <div>
        <label>Langauage</label>
        <input type="checkbox" name="languages" value="English" onChange={(e)=>{handlecheckbox(e)}}/><label>English</label>
        <input type="checkbox" name="languages" value="Telugu" onChange={(e)=>{handlecheckbox(e)}}/><label>Telugu</label>
        <input type="checkbox" name="languages" value="Hindi" onChange={(e)=>{handlecheckbox(e)}}/><label>Hindi</label>
    </div>
    <button onClick={save}>save</button>

</>
    )
}
export default Anji