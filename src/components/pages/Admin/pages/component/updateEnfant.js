
import React, { useEffect,useState } from 'react'
import { FormGroup, Form, Input, Label } from 'reactstrap';
import axios from 'axios';
import Button from '@mui/material/Button';
import { Link, useNavigate, useParams } from 'react-router-dom';

function UpdateEnfant() {
    const [nom, Setnom] = useState('');
    const [prenom, Setprenom] = useState('');
    const [dateNaissance, SetdateNaissance] = useState('');
    const [genre, Setgenre] = useState('');

    const navigate=useNavigate();
    const params = useParams();
    useEffect(() => {
        axios.get(`http://localhost:4000/enfant/getone/${params.id}`)
          .then(res => {
            console.log(res.data)
            Setnom(res.nom);
            Setprenom(res.prenom);
            SetdateNaissance(res.dateNaissance);
            Setgenre(res.genre);
          }).catch(err => console.log(err))
      }, []);

    const update = () => {
        if (window.confirm('tu est sur de modifier cette enfant')) {
            axios.put(`http://localhost:4000/enfant/updateenfant/${params.id}`, {
                nom, prenom, dateNaissance, genre
            }).then(navigate("/listeEnfantADMIN"))
        };
    }

    return (
        <div className='FormAjoutEnfant'>
            <h2 style={{ "margin": "20px", "marginLeft": "80px", "color": "blue" }}>Update Enfant:</h2>
            <Form inline>
                <FormGroup >
                    <Label for="nom"> Nom :  </Label>
                    <Input id="nom" name="nom" type="text" style={{ "border": "solid 1px", "width": "300px" }} onChange={(e) => { Setnom(e.target.value); }} />
                </FormGroup>
                {' '}
                <FormGroup>
                    <Label for="prenom"> Prenom :  </Label>
                    <Input id="prenom" name="prenom" type="text" style={{ "border": "solid 1px", "width": "300px" }} onChange={(e) => { Setprenom(e.target.value); }} />
                </FormGroup>
                {' '}
                <FormGroup>
                    <Label for="dateNaissance"> Date de Naissance: </Label>
                    <Input id="dateNaissance" name="dateNaissance" type="date" style={{ "border": "solid 1px", "width": "300px" }} onChange={(e) => { SetdateNaissance(e.target.value); }} />
                </FormGroup>
                {' '}
                <FormGroup>
                    <Label for="genre" > Genre :
                        <select  onChange={(e) => { Setgenre(e.target.value); }}>
                            <option value=" ">--choisir le genre--</option>
                            <option value="homme">Homme</option>
                            <option value="femme">Femme</option>
                        </select> </Label>
                </FormGroup>

                <div style={{ "marginLeft": "600px" }}>
                    <Button variant="contained" color="error"><Link style={{ "textDecoration": 'none', "color": "white", "cursor": "pointer" }} to="/listeEnfantADMIN">
                        Annuler</Link>
                    </Button>
                    {' '}
                    <Button variant="contained" color="success" style={{ "textDecoration": 'none', "color": "white", "cursor": "pointer" }} onClick={() => update()}>
                        update
                    </Button>
                </div>
            </Form>
        </div>
    )
}



export default UpdateEnfant
