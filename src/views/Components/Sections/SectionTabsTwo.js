import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import methods from "../../../assets/img/methods.svg";

import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";
import Button from "../../../components/CustomButtons/Button";

const useStyles = makeStyles(styles);

export default function SectionTabsTwo() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <div className={classes.container}>
                <h3>Métodos de evaluación de usabilidad</h3>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                        <p>Lla usabilidad no se debería de terminar de testear cuando se lanza el producto al mercado, sino que debería de consistir en un proceso iterativo, efectuándose durante cualquier etapa del diseño para poder contribuir a la continua mejora de la experiencia del usuario. La tecnología evoluciona y también lo hacen las formas en las que un usuario interactúa con un determinado producto.</p>
                        <ul>
                            <li>La evaluación heurística</li>
                            <li>El recorrido cognitivo (cognitive walkthrough)</li>
                            <li>La combinación de ambas técnicas: el recorrido heurístico</li>
                        </ul>
                        <center>
                            <a href={"https://medium.com/@eliseohdez/m%C3%A9todos-y-t%C3%A9cnicas-de-evaluaci%C3%B3n-de-la-usabilidad-sin-personas-usuarias-e8f7b03c8654"} target={"blank"}> <Button color="primary" size="lg" simple> Más información </Button></a>
                        </center>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                        <img src={methods} alt="usability" style={{width:"80%", height:"80%"}} />

                    </GridItem>
                </GridContainer>

            </div>
        </div>
    );
}
