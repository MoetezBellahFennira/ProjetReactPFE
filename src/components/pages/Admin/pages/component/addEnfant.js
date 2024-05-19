import React from "react";
import { FormGroup, Form, Input, Label } from "reactstrap";
import { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { setgroups } from "process";

function Addenfant() {
  const [nom, Setnom] = useState("");
  const [prenom, Setprenom] = useState("");
  const [dateNaissance, SetdateNaissance] = useState("");
  const [genre, Setgenre] = useState("homme");
  const [groups, setGroups] = useState([]);
  const [parents, setParents] = useState([]);
  const [parentId, setParentId] = useState("");
  const [groupId, setGroupId] = useState("");
  const BaseUrl = "http://localhost:4000";
  React.useEffect(() => {
    fetch(`${BaseUrl}/auth/parents`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setParents(data);
      });
    fetch(`${BaseUrl}/groupe`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGroups(data);
      });
  }, []);
  const navigate = useNavigate();

  const ajout = () => {
    if (window.confirm("tu est sur d ajouter cette enfant")) {
      axios
        .post(`http://localhost:4000/enfant/addenfant`, {
          nom,
          prenom,
          dateNaissance,
          genre,
          groupId,
          parentId,
        })
        .then(navigate("/listeEnfantADMIN"));
    }
  };

  return (
    <div className="FormAjoutEnfant">
      <h2 style={{ margin: "20px", marginLeft: "80px", color: "blue" }}>
        Ajout Enfant:
      </h2>
      <Form inline>
        <Label for="exampleSelect">
          {" "}
          Group :
          <select
            onChange={(e) => {
              console.log(e.target.value);
              setGroupId(e.target.value);
            }}
          >
            <option value=" ">--Choisir Group--</option>
            {groups.map((group, index) => {
              return (
                <option value={group._id} key={index}>
                  {group.nom}
                </option>
              );
            })}
          </select>{" "}
        </Label>
        <Label for="parentSelect">
          {" "}
          Parent :
          <select
            onChange={(e) => {
              console.log(e.target.value);
              setParentId(e.target.value);
            }}
          >
            <option value=" ">--Choisir Parent--</option>
            {parents.map((parent, index) => {
              return (
                <option value={parent._id} key={index}>
                  {parent.nom} {parent.prenom}
                </option>
              );
            })}
          </select>{" "}
        </Label>
        <FormGroup>
          <Label for="nom"> Nom : </Label>
          <Input
            id="nom"
            name="nom"
            type="text"
            style={{ border: "solid 1px", width: "300px" }}
            onChange={(e) => {
              Setnom(e.target.value);
            }}
          />
        </FormGroup>{" "}
        <FormGroup>
          <Label for="prenom"> Prenom : </Label>
          <Input
            id="prenom"
            name="prenom"
            type="text"
            style={{ border: "solid 1px", width: "300px" }}
            onChange={(e) => {
              Setprenom(e.target.value);
            }}
          />
        </FormGroup>{" "}
        <FormGroup>
          <Label for="dateNaissance"> Date de Naissance: </Label>
          <Input
            id="dateNaissance"
            name="dateNaissance"
            type="date"
            style={{ border: "solid 1px", width: "300px" }}
            onChange={(e) => {
              SetdateNaissance(e.target.value);
            }}
          />
        </FormGroup>{" "}
        <FormGroup>
          <Label for="genre">
            {" "}
            Genre :
            <select
              onChange={(e) => {
                Setgenre(e.target.value);
              }}
            >
              <option value="">--choisir le genre--</option>
              <option value="homme">Homme</option>
              <option value="femme">Femme</option>
            </select>{" "}
          </Label>
        </FormGroup>
        <div style={{ marginLeft: "800px" }}>
          <Button variant="contained" color="error" type="reset">
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                cursor: "pointer",
              }}
              to="/listeEnfantADMIN"
            >
              Annuler
            </Link>
          </Button>{" "}
          <Button
            variant="contained"
            color="success"
            style={{
              textDecoration: "none",
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => ajout()}
          >
            ajouter
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Addenfant;
