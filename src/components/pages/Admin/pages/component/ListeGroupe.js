import React from "react";

const ListeGroupe = () => {
  const [groups, setGroups] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:4000/groupe/getWithEnfantInstructor")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGroups(data);
      });
  }, []);
  return (
    <div>
      {groups.map((group) => {
        return (
          <div>
            <p>{group.nom}</p>
            <p>{group.instructor.nom + " " + group.instructor.prenom}</p>
            {group.enfants.map((enf) => {
              return (
                <>
                  <li>{enf.prenom}</li>
                  <li>{enf.nom}</li>
                </>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ListeGroupe;
