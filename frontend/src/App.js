import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

async function sendAPIReq() {
  let news = await axios.get("http://localhost:3002/getLocationNews").then((res) => {
    console.log(res.data);
    return res.data;
  }
  ).catch((err) => {
    console.log(err);
    return err;
  });
  console.log(news);
}

function App() {
  return (
    <div className="App">
      <div className="AppHeader allCenter">
        <h1>Location based News Generator</h1>
      </div>
      <div className="allCenter hFull">
        <p className="aboutText">
          This is a simple web app that gets the news in your country by using your location, which is obtained using your <strong>IP address</strong>.
        </p>
        <button className="mt-5 submitBtn" onClick={sendAPIReq}>Get News</button>
      </div>
    </div>
  );
}

export default App;
