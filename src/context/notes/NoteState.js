import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState=(props)=>{
    // const s1={
    //     "name":"Harshi",
    //     "class":"React"
    // };
    // const [state, setstate] = useState(s1)
    // const update=()=>{
    //     setTimeout(() => {
    //         setstate({
    //             "name":"Harsh",
    //             "class":"10a"  
    //         })
    //     }, 1000);
    // }
    const host="http://localhost:5000";
    const notesInitial=[];

      const [notes, setNotes] = useState(notesInitial);

      //Get All Notes
      const getNotes=async ()=>{
        const url=`${host}/api/notes/fetchallnotes`;
        const response = await fetch(url, {
          method: "GET", 
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
          },
        });
        const json=await response.json();
        setNotes(json);
      }

      // Add a note
      const addNote=async (title,description,tag)=>{
        const url=`${host}/api/notes/addnote`;
        const response = await fetch(url, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
          },
          body: JSON.stringify({title,description,tag}), 
        });

        const note=await response.json();
        setNotes(notes.concat(note));
      }

      // Delete a note
      const deleteNote=async (id)=>{
        const url=`${host}/api/notes/deletenote/${id}`;
        const response = await fetch(url, {
          method: "DELETE", 
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
          }, 
        });
        const json= response.json(); 

        const newNote=notes.filter((note)=>{return note._id!==id});
        setNotes(newNote);
      }

      // Edit a note
      const editNote=async (id,title,description,tag)=>{
        //API Call
        const url=`${host}/api/notes/updatenote/${id}`;
        const response = await fetch(url, {
          method: "PUT", 
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
          },
          body: JSON.stringify({title,description,tag}), 
        });
        const json= await response.json(); 

        const newNotes=JSON.parse(JSON.stringify(notes));
        //Logic to edit in client
        for (let index = 0; index < newNotes.length; index++) {
          const element = newNotes[index];
          if(element._id===id)
          {
            newNotes[index].title=title;
            newNotes[index].description=description;
            newNotes[index].tag=tag;
            break;
          }          
        }
        setNotes(newNotes);
      }

    return(
    // <NoteContext.Provider value={{state,update}}>
    <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}}>
        {props.children}
    </NoteContext.Provider>
    );
}

export default NoteState;