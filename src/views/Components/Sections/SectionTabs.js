import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Build from "@material-ui/icons/Build";
import AssignmentIcon from '@material-ui/icons/Assignment';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import CategoryIcon from '@material-ui/icons/Category';
import WebIcon from '@material-ui/icons/Web';
import AvTimerIcon from '@material-ui/icons/AvTimer';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import ImgEspecificaciones from "../../../assets/img/Especif_requisitos.svg";
import ImgDisenoArqu from "../../../assets/img/Diseno_arq.svg";
import ImgDiseno from "../../../assets/img/diseno.svg";
import ImgCod from "../../../assets/img/cod_testing.svg";
import ImgInt from "../../../assets/img/integra_pruebas.svg";
import Imgmtto from "../../../assets/img/opera_mtto.svg"
import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";



const useStyles = makeStyles(styles);

export default function SectionTabs() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
          <h3>Ciclo de vida de la ingenieria de la usabilidad</h3>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <CustomTabs
                headerColor="info"
                tabs={[
                  {
                    tabName: "Esp. de requisitos",
                    tabIcon: AssignmentIcon,
                    tabContent: (
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
                                <img src={ImgEspecificaciones} alt="usability" style={{width:"80%", height:"80%"}} />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                                <h5><strong>Especificación de requisitos</strong></h5>
                                <p>En esta fase del ciclo definimos qué es lo que buscamos, cómo debemos plantear el diseño,
                                   para hacer llegar la información a nuestros usuarios.
                                   <br /><br />
                                   Hacemos un reconocimiento del entorno, y de acuerdo a esto proporcionamos a nuestros usuarios las ideas planteadas para el sitio.
                                </p>
                            </GridItem>
                        </GridContainer>

                    )
                  },
                  {
                    tabName: "Diseño arq.",
                    tabIcon: AccountTreeIcon,
                    tabContent: (
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
                                <img src={ImgDisenoArqu} alt="usability" style={{width:"80%", height:"80%"}} />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                                <h5><strong>Diseño arquitectónico</strong></h5>
                                <p>En esta fase definimos los espacios que vamos a utlizar, las condiciones del mismo y su contenido.
                                    <br /><br />
                                   Se llevan a cabo tareas como la selección y el dimensionamiento de las plataformas hardware y software en las que se apoyará la aplicación web,
                                   se dimensiona el tráfico de red que va a generar la aplicación y dotarla de los recursos necesarios para que pueda asumir dicho tráfico.
                                </p>

                            </GridItem>
                        </GridContainer>
                    )
                  },
                    {
                        tabName: "Diseño",
                        tabIcon: CategoryIcon,
                        tabContent: (
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <img src={ImgDiseno} alt="usability" style={{width:"80%", height:"80%"}} />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <h5><strong>Diseño de detalle</strong></h5>
                                    <p>En esta fase como su nombre lo indica, se detalla el diseño de la aplicación, es aqui donde vamos a determinar el número de
                                       pantallas que verá el usuario, imagenes, multimedias, botones, entre otros.
                                        <br /><br />
                                       Definimos la adaptabilidad del sitio, estableciendo un diseño claro para cada uno de los dispositivos en los que estará disponible.
                                    </p>
                                </GridItem>
                            </GridContainer>
                        )
                    },
                    {
                        tabName: "Cod. y pruebas unitarias",
                        tabIcon: WebIcon,
                        tabContent: (
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <img src={ImgCod} alt="usability" style={{width:"80%", height:"80%"}} />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <h5><strong>Codificación y pruebas unitarias</strong></h5>
                                    <p>En esta fase es momento de transformar las ideas en material de uso para nuestros nuestros, aqui traducimos lo que esta en papel, a la realidad
                                       a la misma vez que vamos testeando para ahorrar tiempo y evitar errores conocidos en el futuro.
                                    </p>
                                </GridItem>
                            </GridContainer>
                        )
                    },
                    {
                        tabName: "Integración y pruebas",
                        tabIcon: AvTimerIcon,
                        tabContent: (
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <img src={ImgInt} alt="usability" style={{width:"80%", height:"80%"}} />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <h5><strong>Integración y pruebas</strong></h5>
                                    <p>En esta fase integramos los sistemas que interactuan en la aplicación, fronted, backend, bases de datos, apis, y testeamos la aplicación para
                                    ofrecer a nuestros usuarios un sistema completo con el mínimo de fallas, que les permita satisfacer sus necesidades.
                                    <br /><br />
                                    Todas las aplicaciónes como parte del ciclo deben pasar po una fase de pruebas a fin de evitar los errores más comunes.
                                    </p>
                                </GridItem>
                            </GridContainer>
                        )
                    },
                  {
                    tabName: "Operación y mtto.",
                    tabIcon: Build,
                    tabContent: (
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
                                <img src={Imgmtto} alt="usability" style={{width:"80%", height:"80%"}} />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                                <h5><strong>Operación y mantenimiento</strong></h5>
                                <p>En esta fase finalmente ponemos a dispoisición de nuestros usuarios un producto elaborado con calidad, y a la misma vez, moniteamos su funcionamiento
                                   para poder indentificar si satisface las necesidades de los visitantes.
                                    <br /><br />
                                   Tener en cuenta el feedback de nuestros usuarios, hará mejor la aplicación y brindará una mejor perpectiva del sitio.
                                </p>
                            </GridItem>
                        </GridContainer>
                    )
                  }
                ]}
              />
            </GridItem>

          </GridContainer>

      </div>
    </div>
  );
}
