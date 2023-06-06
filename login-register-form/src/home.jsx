import React, { useState,useEffect } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";

export const Home = (props) => {
    const [name, setname] = useState([]);


    useEffect(() => {
        axios.get("https://restcountries.com/v2/all?fields=name,region,flag" )

        .then((res) => {

            const Data = res.data;
   
console.log(Data);

            const userr = Data.map((obj) => (


                <tr className="chk" >

            <td width="20%" style={{ border: '1px solid black' }}>{obj.name}</td>
<td width="20%" style={{ border: '1px solid black' }}>{obj.region}</td>
<td width="20%" style={{ border: '1px solid black' }}><img src={obj.flag} style={{height:'20px',weight:'20px'}}></img></td>

                </tr>

            ));

 setname(userr);        

      
        })

        .catch((error) => {
            console.log(error);
        });
    });




    return (
        <div className="auth-form-container">
            <h2 style={{ textDecoration: 'underline',color: 'blue' }}>Cities</h2>
            <button className="link-btn" style={{ marginRight:'300px',color: 'red' }} onClick={() => props.onFormSwitch('login')}>Go Back</button> 
            <table style={{ border: '1px solid black' }}>
<thead >
  <tr>
    <th style={{ color: 'black',border: '1px solid black' }}>City name</th>
    <th style={{ color: 'black',border: '1px solid black'}}>Region</th>
    <th style={{ color: 'black',border: '1px solid black' }} width="20%">Flag</th>


  </tr>
</thead>
<tbody className="tbody">

{name}
</tbody>
</table>
   
    </div>
    )
}
