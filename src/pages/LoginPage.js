import React ,{useContext} from 'react'
import { AuthContext } from '../context/AuthContext';
// import "./login.css"

const LoginPage = () => {
    let {loginUser} = useContext(AuthContext)
  return (
    <div className='row'> 
      <div className="offset-lg-3 col-lg-6" style={{ marginTop: '50px' }}>
       
 
        <form onSubmit={loginUser} className="container">
        <div className="card">
            
          <div className="card-header">
            <h2>Login</h2>
        
        
           
              {/* <div classname='text'>Login</div> */}
              </div>

              <div className="card-body">
                 {/* <div className="column"> */}
                 {/* <div className="col-lg-9"> */}
                    <div className="form-group">
            
            <input type = "text"  name= "username" placeholder='Enter Username'  className='form-control'/>
            </div>
            {/* </div> */}
            <br></br>
            {/* <div className="col-lg-9"> */}
                    <div className="form-group">
            <input type = "password"  name= "password" placeholder='Enter password' className='form-control' />
            </div>
            {/* </div> */}
            {/* </div> */}
            </div>
            <br></br>
            <div className="card-footer">
            <button type="submit" class="btn btn-primary" >Login</button>
            </div>
            </div>
        </form>
        </div>
    </div>
  

    
  )
}

export default LoginPage;