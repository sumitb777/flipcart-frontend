import axios from 'axios'
import React ,{ useState }  from 'react'

const UserAccount = () => {
    const [userdata, setuserdata] = useState({
        username: '',
        mobile: '',
        city: '',
        password: ''

    })
    const [logindata, setlogindata] = useState({
        username: '', 
        password: ''
    })

    const createaccount = async () => {      
             try {

            let uri = `https://flipcart-backend.onrender.com/create-user`;
            let { data } = await axios.post(uri, { ...userdata })

            if (data.status === true) {
                window.location.assign('/');
            }
            else{
                alert('Account Not Created')
            }

        } catch (error) {
            console.log(error)
        }
    }
    const login = async () => {
        let uri = `https://flipcart-backend.onrender.com/login`;
        let { data } = await axios.post(uri, { ...logindata })
              console.log(data)
        if (data.status === true) {
            localStorage.setItem('token', JSON.stringify(data.token))
            window.location.assign('/');
        }
         else {
            alert('User not Exits')
        }
    }
  return (
    <div>
         <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Create Account</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label for="exampleFormControlInput11" class="form-label">Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput11"
                                    placeholder="Name" value={userdata.username}
                                    onChange={(event) => { setuserdata({ ...userdata, username: event.target.value }) }}
                                />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput12" class="form-label">Mobile</label>
                                <input type="number" class="form-control" id="exampleFormControlInput12"
                                    placeholder="Enter Mobile Number" value={userdata.mobile}
                                    onChange={(event) => { setuserdata({ ...userdata, mobile: event.target.value }) }}
                                />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput13" class="form-label">City</label>
                                <input type="text" class="form-control" id="exampleFormControlInput13"
                                    placeholder="Enter Address" value={userdata.city}
                                    onChange={(event) => { setuserdata({ ...userdata, city: event.target.value }) }}
                                />
                            </div>
                            <div class="col-auto">
                                <label for="inputPassword4" class="visually-hidden">Password</label>
                                <input type="password" class="form-control" id="inputPassword4"
                                    placeholder="Password" value={userdata.password}
                                    onChange={(event) => { setuserdata({ ...userdata, password: event.target.value }) }} />

                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                            { logindata.password && logindata.password !=='' ?
                             <button type="button" class="btn btn-primary"
                             onClick={createaccount}>Create Account</button> :    <button type="button" class="btn btn-primary"
                             onClick={()=> alert(" Enter Credential")}
                             >Create Account</button> 
                              }
                          
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Login</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label for="exampleFormControlInput14" class="form-label">Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput14"required
                                    placeholder="Name" value={logindata.username}
                                    onChange={(event) => { setlogindata({ ...logindata, username: event.target.value }) }}
                                />
                            </div>
                            <div class="col-auto">
                                <label for="inputPassword2" class="visually-hidden">Password</label>
                                <input type="password" class="form-control" id="inputPassword2"required
                                    placeholder="Password" value={logindata.password}
                                    onChange={(event) => { setlogindata({ ...logindata, password: event.target.value }) }} />

                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                            { logindata.password && logindata.password !=='' ?
                             <button type="button" class="btn btn-primary"
                             onClick={login}>Login</button> :    <button type="button" class="btn btn-primary"
                             onClick={()=> alert(" Enter Credential")}
                             >Login</button> 
                              }
                         
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )



}

export default UserAccount