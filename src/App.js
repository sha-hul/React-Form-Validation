// import React, { useState } from "react";
// let App=()=>{
//     let [fullName,upfullName]=useState(
//         {
//             fname :"",
//             lname :"",
//         }
//     );
//     let inputName=(event)=>{
//         var value=event.target.value;
//         var name=event.target.name;
//         console.log(value)
//         console.log(name)
//         upfullName(
//             (preValue)=>{
                
//                 if(name==="fname"){
//                     return {
//                         fname : value ,
//                         lname : preValue.lname
//                     }
//                 }
//                 else  if(name==="lname"){
//                     return {
//                         fname : preValue.fname ,
//                         lname : value
//                     }
//                 }
//             }
//             )
//         }
//         let onSubmit=(event)=>{
//             event.preventDefault();
//             alert('form Submitted')
//         }
//     return(
//         <>
//         <div className="input-form">
//         <form onSubmit={onSubmit} >
//             <div>
//                 <h1>{fullName.fname}{fullName.lname}</h1>
//                 <input type="text"
//                 name='fname'
//                  value={fullName.fname}
//                  placeholder="Enter the fname..."
//                  onChange={inputName}
//                   />
//                 <input type="text"
//                 name='lname'
//                 value={fullName.lname}
//                  placeholder="Enter the lname..."
//                  onChange={inputName}
//                  />
//                 <button 
//                 type="submit" >Send 🙋</button>
//             </div>
//         </form>
//         </div>
//         </>
//     )
// }
// export default App;

// Spread operator


import React, { useState } from "react";
let App=()=>{
    let [fullForm,upValue]=useState(
        {
            fname:"",
            lname:"",
            email:"",
            number:""
        }
    );
   let inputEvent=(event)=>{
//    var value=event.target.value;
//    var name=event.target.name;
const{value,name}=event.target
   upValue(
       (preValue)=>{
           console.log(preValue)
           console.log({[name]:value})
           return{
               ...preValue,
               [name]:value
           }
       }
   )
   }
    let onSubmit=(event)=>{
        event.preventDefault();
    }
    return(
    <>
    <div className="input-form">
          <form onSubmit={onSubmit} >  
           <div>
                <h1>{fullForm.fname}{fullForm.lname}  </h1>
                <h4>{fullForm.email}</h4>
                <h4>{fullForm.number}</h4>
                    <input type="text"
                    value={fullForm.fname} 
                    name="fname"
                    placeholder="Enter the FirstName" 
                    onChange={inputEvent}
                    />
                    <input type="text"
                    value={fullForm.lname} 
                    name="lname"
                     placeholder="Enter the LastName" 
                     onChange={inputEvent}
                      />
                       <input type="email"
                    value={fullForm.email} 
                    name="email"
                     placeholder="Enter the email" 
                     onChange={inputEvent}
                      />
                       <input type="number"
                    value={fullForm.number} 
                    name="number"
                     placeholder="Enter the LastName" 
                     onChange={inputEvent}
                      />
                    <button type="submit" >Send 😄</button>
            </div>
            </form>
    </div>
    </>
    )
}
export default App;

//form shows the valid after submit to the backend

// import React, { useState } from "react";
// let App=()=>{
//     let [curValue,upValue]=useState({
//         fname:"",
//         lname:"",
//         email:"",
//         number:""
//     });
//     let [curVal,upVal]=useState(
//         {       
//          fname:"",
//         lname:"",
//         email:"",
//         number:""
//     }
//     );
//     let inputName=(event)=>{
//         let{value,name}=event.target;
//         upValue((preValue)=>{
//             return{
//                 ...preValue,
//                 [name]:value
//             }
//         })
//     }
//     let show=(event)=>{
//         //for remains stable 
//         event.preventDefault();
//         upVal(curValue)
//     }
//     return(
//         <>
//         <div className="input-form">
//         <form onSubmit={show} >
//             <div>
//                 <h1>{curVal.fname} {curVal.lname}</h1>
//                 <p>{curVal.email}</p>
//                 <p>{curVal.number}</p>
//                 <input type="text"
//                  value={curValue.fname}
//                  name="fname"
//                  placeholder="Enter the name..."
//                  onChange={inputName} />
//                 <input type="text"
//                  name="lname" 
//                  value={curValue.lname}
//               placeholder="enter your last name..."
//                  onChange={inputName}/>
//                   <input type="text"
//                  autoComplete="off"
//                  value={curValue.email}
//                  name="email"
//                  placeholder="Enter the email..."
//                  onChange={inputName} />
//                   <input type="number"
//                  autoComplete="off"
//                  value={curValue.number}
//                  name="number"
//                  placeholder="Enter the mobile number..."
//                  onChange={inputName} />
//                 <button type="submit" >Send 🙋 </button>
//             </div>
//         </form>
//         </div>
//         </>
//     )
// }

// export default App;
