import React from "react";
import ExpContenu from "./experienceContenu";

const Experience = () => {
  return (
    <div>
        <h1>Expériences</h1>
      <ExpContenu
        name="Opérateur-Régleur,Remplaçant Chef d'Équipe"
        title="VYGON-SIPV, Ecouen"
        time="2016-2019"
        description="Management d'une équipe de 30 personnes, Formateur des nouveaux employés, Formateur aux nouvelles technologies et méthodes pour les employés confirmés et contrôle des produits finis"
      />

      <ExpContenu
        name="LaPoste"
        title="Centre de tri,Groslay"
        time="2014-Fin 2015"
        description="Facteur polyvalent"
      />
    </div>
  );
};
export default Experience;
