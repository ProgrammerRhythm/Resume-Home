import logo from './logo.png'
import './App.css'
import cvPhoto from './Screenshot 2023-07-03 at 1.55.03 AM.png'
function App() {
  return (
    <div className="" style={{backgroundColor: '#14171d',height: '100vh',width:'100vw'}}>
      <div className="d-flex justify-content-center align-items-center container" style={{backgroundColor: '#14171d',height: '100vh',width:'100vw'}} >
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <div style={{flexDirection: 'column',justifyContent: 'center'}} className="ContentSection d-flex justify-content-center align-items-center">
            <img className="d-flex justify-content-center" src={logo} alt="" /> 
            <a class="Home__Button-bsEUpq bsFezP" href="/generator">Make New Resume</a> 
            <a class="Home__Button-bkXEXP hFMPuQ" href="/generator">Continue Session</a> 
            <a class="Home__Button-bkXEXP hFMPuQ" href="/generator">Import JSON</a> 
            </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 ImgCv">
          <img className='img-fluid' src={cvPhoto} alt="" />
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
