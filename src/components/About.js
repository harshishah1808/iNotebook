import React from 'react';
// import NoteContext from '../context/notes/NoteContext';

const About = () => {
  // const a=useContext(NoteContext);
  // useEffect(() => {
  //   a.update();
  // }, [])
  
  return (
    <div>
        {/* This is About {a.state.name} and she is studying {a.state.class} */}
        <h2 className='mb-3'>iNotebook is an online web platform where you can create, edit, upload, delete your notes privately and securely without any disturbance</h2>
        <div class="accordion" id="accordionExample" style={{border: "2px solid lightblue"}}>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <strong>Safe and Accessible</strong>
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Stores notes securely and can access them from any device anywhere in the world with an internet connection.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Organized Notes</strong>
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Keeps notes organized with new notes along with old ones retained.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Advanced Encryption</strong>
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  iNotebook uses advanced encryption techniques to protect sensitive information both in transit and at rest.
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default About