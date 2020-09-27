import React from "react";
// plugin that creates slider
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import usability from "../../../assets/img/usabilidad.svg";
import Button from "../../../components/CustomButtons/Button";


const useStyles = makeStyles(styles);

export default function SectionBasics() {
  const classes = useStyles();
  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h3>Usabilidad: nociones básicas para los profesionales de la información</h3>
        </div>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <img src={usability} alt="usability" style={{width:"80%", height:"80%"}} />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
            <strong>ISO/IEC 9126</strong>
                <p>La usabilidad se refiere a la capicidad de una software de ser comprendido, aprendido, usado, y ser atractivo para el usuario, en condiciones específicas de uso.</p>
              <ul>
                <li>Conce al usuario</li>
                <li>Monimiza la memorización</li>
                <li>Optimiza las operaciones</li>
                <li>Gesntiona los errores</li>
              </ul>
              <center>
                <a href={"https://www.youtube.com/watch?v=a2u5HePNwEQ"} target={"blank"}> <Button color="primary" size="lg" simple> Más información </Button></a>
                </center>

            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
