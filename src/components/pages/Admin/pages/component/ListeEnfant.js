import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Table, Button } from "reactstrap";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate, Link } from "react-router-dom";

function ListeEnfant() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/enfant/withParent")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const del = (id) => {
    if (window.confirm("tu est sur de supprimer cette enfant")) {
      axios
        .delete(`http://localhost:4000/enfant/deleteenfant/${id}`)
        .then(window.location.reload())
        .catch((err) => console.log(err));
    }
  };

  return (
    <Table bordered hover responsive size="" striped>
      <thead>
        <tr>
          <th>id</th>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Date de naissance</th>
          <th>Genre</th>
          <th>Nom et prenom pére</th>
          <th>nomGroupe</th>

          <th>operation</th>
        </tr>
      </thead>
      <tbody>
        {data.map((data, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{data.nom}</td>
            <td>{data.prenom}</td>
            <td>{data.dateNaissance}</td>
            <td>{data.genre}</td>
            <td>
              {data.parent.nom} {data.parent.prenom}
            </td>
            <td>{data.group.nom}</td>

            <td>
              <div style={{ textDecoration: "none" }}>
                <Button color="danger" onClick={() => del(data._id)}>
                  <DeleteIcon />{" "}
                </Button>
                <Button color="info">
                  {" "}
                  <Link to={"/UpdateEnfant/" + data._id}>
                    <CreateIcon />
                  </Link>
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
export default ListeEnfant;
