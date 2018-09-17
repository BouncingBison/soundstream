
import React from 'react';  
import Dropzone from 'react-dropzone';
import styled from "styled-components"; 
import axios from 'axios'; 
const DropWrapper = styled.div`

align: center; 

`

 class Accept extends React.Component {
    constructor() {
      super()
      this.state = {
        accepted: [],
        rejected: []
      }
    }

    afterDrop = (accepted) => {
      
      console.log(accepted[0].preview);
      // POST to a test endpoint for demo purposes

      axios({
        method:'post',
        url: '/upload',
        responseType:'stream'
      }).then(function(accepted) {
          // accepted.data.pipe(accepted.createWriteStream(endpoint))
          accepted.pipe(accepted.createWriteStream())
      });

    }  

    render() {
      return (
<DropWrapper>
          <div className="dropzone">
            <Dropzone
              accept=".mp3"
              onDrop={(accepted, rejected) => { this.setState({ accepted, rejected }); this.afterDrop(accepted); }}
            >
              <p>Try dropping some files here, or click to select files to upload.</p>
              <p>Only *.mp3 files will be accepted</p>
            </Dropzone>
          </div>
            <h2>Accepted files</h2>
            <ul>
              {
                this.state.accepted.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
              }
            </ul>
            <h2>Rejected files</h2>
            <ul>
              {
                this.state.rejected.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
              }
            </ul>
 </DropWrapper>
      );
    }
  }
  <Accept/>


  export default Accept; 