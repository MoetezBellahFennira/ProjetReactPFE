import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Table,Button} from 'reactstrap';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';

function ListeEnfant() {


  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/auth/Alluser')
   .then(res => {
    console.log(res.data)
    setData(res.data)
  }).catch(err => console.log(err))
  }, []);
  
  
  const del = (id) =>{
    if (window.confirm('tu est sur de supprimer cette enfant')){
       axios.delete(`http://localhost:4000/auth/deleteuser/${id}`)
       .then(
        window.location.reload()
      ).catch(err => console.log(err))
    }
  }
  const update = (id) =>{
    if (window.confirm('tu est sur de supprimer cette enfant')){
       axios.delete(`http://localhost:4000/auth/deleteuser/${id}`)
       .then(
        window.location.reload()
      ).catch(err => console.log(err))
    }
  }





  return ( 
  <Table bordered hover responsive size="" striped>
    <thead>

      <tr>
        <th>id</th>
        <th>Nom</th>
        <th>Prénom</th>
        <th>Email</th>
        <th>Type</th>
      </tr>

    </thead>
    <tbody>
    
    {data.map((data,index) => ( 
  
    <tr key={index}>

     <th scope="row">{index+1}</th>
       <td>{data.nom}</td>
       <td>{data.prenom}</td>
       <td>{data.email}</td>
       <td>{data.type}</td>
       <td>
       <div className='btnBlock'>
        <Button color="danger" onClick={() => del(data._id)}><DeleteIcon/> </Button>
        <Button color="info" onClick={() => update(data._id)}> <CreateIcon /> </Button>

       
       </div>
       </td>
       
    </tr>
    ))}
    </tbody>
    </Table>
  );
}
export default ListeEnfant;
