import "./App.css";
import { useState } from "react";

function App() 
{

  // const [firstName, setFirstName] = useState("");
  //const [lastName, setLastName] = useState("");
 // console.log(firstName);


 //---------------------------------------Concept-------How different states are handled using same function.
  function changehandler(event)
  {
      const {name,value,type,checked}=event.target
      //{name, value, type, checked} extracts the specified properties from event.target in a single step.

      
      //console.log(event.target.value); //event.target--here,represents an input tag--refers to an element  where the event occured--event was onChange
      // setFirstName(event.target.value);

      setFormData(prevFormData=>
      {
        //returning an object so i am returning {}
        return{
          ...prevFormData,  //whatever was in previous

        // [event.target.name]: event.target.value
        //event.target.name--->gives name of the element where the event occurred which is one of the key in FormData 

        //event.target.name---written inside square brackets ---syntax
        //event.target.name==>FormData ka key access kar raha hu by giving same  value in "name" attribute as key name in FormData 
        
        

        [name]: type==="checkbox" ? checked:value
        //in place of event.target.name---i can write name and same for value
        //if type ==checkbox then name=checked (that is input field ka content entered by user  ,
        // aur checkbox ke case main  vo hota hai checked aur textarea ke case main value)
          

        }
      });
  }

  const [FormData, setFormData] = useState({
    firstName: "",
    lastName: "",
     email: "",
     comments: "",
     isVisible: true,
      mode: "",
     favCar: ""
  });

function submithandler(event)
{
   event.preventDefault();
   console.log("Printing the entire form");
   console.log(FormData);
}

console.log(FormData)

  return (
   <div className="App">
    <form onSubmit={submithandler}>
      <input type="text" placeholder="first name" onChange={changehandler} name="firstName" value={FormData.firstName} style={{ border: '2px solid black' }}></input>
      <br></br>
      <br></br>


       <input type="text" placeholder="last name" onChange={changehandler} name="lastName" value={FormData.lastName} style={{ border: '2px solid black' }}></input>
       {/* used "name" attribute taaki pata challe ki konse tag se event trigger hua */}
       {/* aur name ki value  same rakho to object main variables ke name  se */}

       <br></br>
       <br></br>

       <input type="text" placeholder="enter email" onChange={changehandler} name="email" value={FormData.email} style={{ border: '2px solid black' }}></input>
       {/* used value attribute to maintain  the state of input tag.  ==>controlling component  -->see notes*/}

       <br></br>
       <br/>

       <textarea placeholder="enter your comments" onChange={changehandler} name="comments" value={FormData.comments} style={{ border: '2px solid black' }}></textarea>
       <br/>
       <br/>
       

       <input type="checkbox" onChange={changehandler} name="isVisible" value={FormData.isVisible} id="isVisible" checked={FormData.isVisible} style={{ border: '2px solid black' }}></input>
       <label htmlFor="isVisible">  Am i visible </label> 
       {/* if i click on text then also checkbox would be ticked */}

       <br/>
       <br></br>
       

       <input type="radio" onChange={changehandler}  name="mode" value="online-mode" id="online-mode" checked ={FormData.mode === "online-mode"} style={{ border: '2px solid black' }}></input>
       <label htmlFor="online-mode">Online-mode   </label>

       <input type="radio" onChange={changehandler}  name="mode" value="ofline-mode" id="ofline-mode" checked ={FormData.mode === "ofline-mode"} style={{ border: '2px solid black' }}></input>
       <label htmlFor="ofline-mode">Ofline-mode</label>
       <br/>
       <br/>


       <label htmlFor="favCar">Favourite Car   </label>
       <select
        onChange={changehandler} name="favCar" id="favCar" value={FormData.favCar} style={{ border: '2px solid black' }}>

        <option value="Scorpio">Scorpio</option>
        <option value="Jaguar">Jaguar</option>
        <option value="Thar">Thar</option>
       </select>

       <br/>
       <br/>
       <button style={{ border: '2px solid black' }}>Submit</button>

    </form>
   </div>
  );
}

export default App;
