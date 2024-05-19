import React from "react";
import { FormGroup, Form, Input, Label, FormFeedback } from "reactstrap";
import { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";

function Addenfant() {
  const [type, Settype] = useState("Parent");
  const [nom, Setnom] = useState("");
  const [prenom, Setprenom] = useState("");
  const [email, Setemail] = useState("");
  const [motDePasse, SetmotDePasse] = useState("");
  const [groups, setGroups] = useState([]);
  const [groupId, setGroupId] = useState("");
  React.useEffect(() => {
    fetch("http://localhost:4000/groupe/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGroups(data);
      });
  }, []);

  const navigate = useNavigate();
  const ajout = () => {
    if (window.confirm("tu est sur d ajouter cette utilisateur")) {
      console.log(type);
      axios
        .post(`http://localhost:4000/auth/register`, {
          nom,
          prenom,
          email,
          motDePasse,
          type,
          groupId,
        })
        .then(navigate("/PageListeUserAdmin"));
    }
  };

  return (
    <div className="FormAjoutEnfant">
      <h2 style={{ margin: "20px", marginLeft: "80px", color: "blue" }}>
        Ajout utilisateur:
      </h2>
      <Form inline>
        <FormGroup>
          <Label for="exampleSelect">
            {" "}
            type :
            <select
              onChange={(e) => {
                Settype(e.target.value);
              }}
            >
              <option value=" ">--choisir le type d'utilisateur--</option>
              <option value="Parent">Parent</option>
              <option value="Employer">Employer</option>
              <option value="Administrative">Admin</option>
            </select>{" "}
          </Label>
        </FormGroup>
        <FormGroup>
          {type === "Employer" && (
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
          )}
        </FormGroup>
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
          <Label for="email"> Email: </Label>
          <Input
            valid
            id="Email"
            name="Email"
            type="Email"
            placeholder="Test@mail.com"
            style={{ border: "solid 1px", width: "300px" }}
            onChange={(e) => {
              Setemail(e.target.value);
            }}
          />
          <FormFeedback tooltip>ce email n'est pas valide</FormFeedback>
        </FormGroup>{" "}
        <FormGroup>
          <Label for="examplePassword"> Motdepasse : </Label>
          <Input
            id="motDePasse"
            required
            name="motDePasse"
            type="password"
            placeholder="******"
            style={{ border: "solid 1px", width: "300px" }}
            onChange={(e) => {
              SetmotDePasse(e.target.value);
            }}
          />
          <FormFeedback tooltip>ce motdepasse n'est pas valide</FormFeedback>
        </FormGroup>
        <div style={{ marginLeft: "800px" }}>
          <Button variant="contained" color="error">
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                cursor: "pointer",
              }}
              to="/PageListeUserAdmin"
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
