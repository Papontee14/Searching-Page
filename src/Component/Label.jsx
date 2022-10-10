import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardImg } from 'react-bootstrap';
import { useState } from 'react';

const Label = ({fullname,gender,country,email,image}) =>{


    return(

      <div className="col d-flex justify-content-center mb-4">
        <Card style={{width:400,height:500}}>
          <CardImg src={image} className="card-img-top" style={{width:400,height:300}}/>
          <Card.Body style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',padding:0}}>
            <Card.Text style={{padding:5,margin:0,color:"gray",fontSize:"16px"}}>{fullname}</Card.Text>
            <Card.Text style={{padding:5,margin:0,color:"black",fontSize:"18px"}}>{gender}</Card.Text>
            <Card.Text style={{padding:5,margin:0,color:"black",fontSize:"18px"}}>{email}</Card.Text>
            <Card.Text style={{padding:5,margin:0,color:"black",fontSize:"18px"}}>{country}</Card.Text>
          </Card.Body>
        </Card>
      </div>      
 )
}

export default Label;
