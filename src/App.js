import logo from './logo.png'
import './App.css'
import cvPhoto from './Screenshot 2023-07-03 at 7.38.06 PM.png'
function App() {
  return (
    <div className="" style={{backgroundColor: '#14171d',height: '100vh',width:'100vw'}}>
      <div className="d-flex justify-content-center align-items-center container" style={{backgroundColor: '#14171d',height: '100vh',width:'100vw'}} >
      <div  className="row">
        <div style={{display: 'flex'}} className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <div style={{flexDirection: 'column',justifyContent: 'center'}} className="ContentSection d-flex justify-content-center align-items-center">
            <img className="d-flex justify-content-center" src={logo} alt="" /> 
            <a class="Home__Button-bsEUpq bsFezP" href="/generator">Login</a> 
            <a class="Home__Button-bkXEXP hFMPuQ" href="/generator">Register</a> 
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
