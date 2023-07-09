import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContext";

const AddNote = (props) => {
  const context = useContext(NoteContext);
  const { addNote } = context;

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: " ",
  });

  const onClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({
      title: "",
      description: "",
      tag: "",
    });
    props.showAlert("Added Successfully","success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-3">
      <h2>Add a Note</h2>
      <form className="my-3">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="title"
            className="form-control"
            name="title"
            id="title"
            aria-describedby="emailHelp"
            value={note.title}
            onChange={onChange}
            minLength={5}
            style={{border: "2px solid lightblue"}}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            name="description"
            id="description"
            value={note.description}
            onChange={onChange}
            minLength={5}
            style={{border: "2px solid lightblue"}}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="tag">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            name="tag"
            id="tag"
            value={note.tag}
            onChange={onChange}
            minLength={5}
            style={{border: "2px solid lightblue"}}
            required
          />
        </div>
        <button disabled={note.title.length<5 || note.description.length<5} onClick={onClick} type="submit" className="btn btn-primary">
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
