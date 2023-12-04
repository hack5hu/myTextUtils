import React,{useState} from 'react'
import axios from "axios"
import qs from 'qs'
function Login() {
    const [name, setName]= useState('')
    const [pass, setPass]= useState('')
    console.log(name)
    const fn=()=>{
        let details = qs.stringify({
         name: name,
         password:pass
});

let fig = {
  method: "post",
  maxBodyLength: Infinity,
  url: "http://127.0.0.1:5001/submit",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  data: details,
};

axios
  .request(fig)
  .then((response) => {
    console.log("resposne",JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log("error",error);
  });
    }
  return (
    <div>
      <input
        id="name"
        onBlur={(data) => setName(data.target.value)}
        placeholder="enter your name"
      />
      <input
        id="pass"
        onBlur={(data) => setPass(data.target.value)}
        placeholder="enter your pass"
      />
      <button onClick={fn}>Submit the form</button>
    </div>

  );
}

export default Login