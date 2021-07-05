import React, { useState } from "react";
let App=()=>{
    let [fullName,upfullName]=useState(
        {
            fname :"",
            lname :"",
        }
    );
    let inputName=(event)=>{
        var value=event.target.value;
        var name=event.target.name;
        console.log(value)
        console.log(name)
        upfullName(
            (preValue)=>{
                
                if(name==="fname"){
                    return {
                        fname : value ,
                        lname : preValue.lname
                    }
                }
                else  if(name==="lname"){
                    return {
                        fname : preValue.fname ,
                        lname : value
                    }
                }
            }
            )
        }
        let onSubmit=(event)=>{
            event.preventDefault();
            alert('form Submitted')
        }
    return(
        <>
        <div className="input-form">
        <form onSubmit={onSubmit} >
            <div>
                <h1>{fullName.fname}{fullName.lname}</h1>
                <input type="text"
                name='fname'
                 value={fullName.fname}
                 placeholder="Enter the fname..."
                 onChange={inputName}
                  />
                <input type="text"
                name='lname'
                value={fullName.lname}
                 placeholder="Enter the lname..."
                 onChange={inputName}
                 />
                <button 
                type="submit" >Send 🙋</button>
            </div>
        </form>
        </div>
        </>
    )
}
export default App;
