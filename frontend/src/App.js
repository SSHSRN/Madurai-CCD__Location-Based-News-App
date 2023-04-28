import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function sendAPIReq() {
  const link = document.querySelector(".linkInput").value;
  if (link === "") {
    alert("Please enter a valid YouTube video URL, da!");
    return;
  }
  if(link.startsWith("https://www.youtube.com/watch?v=")){
    console.log("The link is valid");
    console.log(link);
  }
  else{
    alert("Please enter a valid YouTube video URL, da!");
    return;
  }
}

function App() {
  return (
    <div className="App">
      <div className="AppHeader allCenter">
        <h1>YouTube Video Transcript Generator</h1>
      </div>
      <div className="allCenter hFull">
        <p className="aboutText">
          This is a simple web app that generates a <strong>transcript</strong> of a <strong>YouTube video</strong>. It uses the <strong>Whisper</strong> API and a combination of <strong>python</strong> and <strong>node.js</strong> to generate the transcript.<br />
          To use this app, simply enter the URL of the YouTube video you want to generate the transcript for, and click the <strong>Generate Transcript</strong> button.<br />
        </p>
        <input className="linkInput mt-3" type="text" placeholder="Enter YouTube video URL(https://www.youtube.com/watch?v=...)" />
        <button className="mt-5 submitBtn" onClick={sendAPIReq}>Generate Transcript</button>
      </div>
    </div>
  );
}

export default App;
