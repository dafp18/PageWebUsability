import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import DevicesOther from "@material-ui/icons/DevicesOther";
import MoodIcon from "@material-ui/icons/Mood";
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';


// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <NavPills
                color="info"
                tabs={[
                  {
                    tabButton: "Usabilidad",
                    tabIcon: Dashboard,
                    tabContent: (
                      <span>
                        <p>
                          En términos de diseño web, la usabilidad web representa un aspecto de gran importancia; ya que si tu plataforma no es fácil de usar,
                          significa que tendrás un gran porcentaje de abandono de usuarios en tu página web.
                          <br /><br />
                          Cuando un cliente entra a una página, automáticamente le tiene que parecer cómoda; y si cree que le va a resultar difícil conseguir una información,
                          se va a salir. Recordemos que la competencia está a un clic de distancia.
                          <br /><br />
                          La usabilidad web tiene el objetivo de brindarles a los usuarios las herramientas necesarias para que no se pierdan dentro de la plataforma.
                          Esto evidentemente va a permitir que permanezcan por más tiempo en el sitio web, hasta que consigan lo que están buscando.
                        </p>
                      </span>
                    )
                  },
                    {
                        tabButton: "Accesibilidad",
                        tabIcon: TransferWithinAStationIcon,
                        tabContent: (
                            <span>
                        <p>
                          Cuando hablamos de accesibilidad, hacemos énfasis a todo lo que hay en el interior de una plataforma,
                          como es el caso de sus opciones y funciones. Todo esto debe está a disposición de cualquier usuario de manera fácil.
                          <br /><br />
                          La accesibilidad proporciona flexibilidad al acomodarse a las necesidades de cada usuario y está dirigida a que el sistema esté elaborado al más amplio número de usuarios.
                          Se abre la posibilidad de que pueda ser accedido y usado por el mayor número posible de personas,
                          indiferentemente de las limitaciones propias del individuo o de las derivadas del contexto de uso.
                          <br /><br />
                          La accesibilidad Web se ha entendido siempre como resposabilidad de los desarrolladores Web. Pero, el software Web tiene también un papel importante en la accesibilidad Web.
                          Es importante que el software ayude a los desarrolladores a generar y evaluar sitios Web accesibles para que las personas con discapacidad puedan utilizarlos.
                        </p>
                      </span>
                        )
                    },
                    {
                        tabButton: "UI (User Interface)",
                        tabIcon: DevicesOther,
                        tabContent: (
                            <span>
                                <p>
                                  Interfaz del Usuario, es la vista que permite a un usuario interactuar de manera efectiva con un sistema.
                                  Es la suma de una arquitectura de información + elementos visuales + patrones de interacción.
                                  <br /><br />
                                  Un UI Designer se encarga de crear visualmente la interfaz del producto para que vaya acorde a la experiencia del usuario.
                                  Además, crea elementos interactivos y se preocupa de que se vean bien en todas las plataformas (móvil, tableta, web).
                                  Un UI Designer trabaja muy de la mano con el equipo de desarrollo o diseño de producto proporcionando guías de estilos y patrones de uso.
                                  <br /><br />
                                  Entonces, un buen trabajo de diseño UI te permitirá guiar a los usuarios por la navegación y los llevará a tomar dichas acciones de manera natural.
                                  Si el objetivo es que la persona pida el contacto de un vendedor, todo en la página (contenidos, menús de navegación, CTAs, imágenes, etc.) debe colaborar para que ella sienta esta necesidad.
                                </p>
                                <br />
                            </span>
                        )
                    },
                  {
                    tabButton: "UX (User eXperience)",
                    tabIcon: MoodIcon,
                    tabContent: (
                      <span>
                        <p>
                          Experiencia de Usuario, es aquello que una persona percibe al interactuar con un producto o servicio. Logramos una buena UX al enfocarnos en diseñar productos útiles,
                          usables y deseables, lo cual influye en que el usuario se sienta satisfecho, feliz y encantado.
                          <br /><br />
                          Una buena UX se logra a través del Diseño Centrado en el Humano, el cual es el enfoque de conocer las necesidades de los usuarios
                          y alinearlos a los objetivos del negocio tomando también en cuenta las limitaciones técnicas.
                          <br /><br />
                          La persona que realiza UX, es conocida como un UX Designer y como parte de sus responsabilidades está
                          el de investigar qué es lo que las personas necesitan para cumplir sus objetivos y resolver sus dolores.
                        </p>


                      </span>
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
