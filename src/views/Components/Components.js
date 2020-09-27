import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page

import SectionBasics from "./Sections/SectionBasics.js";
import SectionTabs from "./Sections/SectionTabs.js";
import SectionPills from "./Sections/SectionPills.js";
import SectionJavascript from "./Sections/SectionJavascript.js";

import styles from "assets/jss/material-kit-react/views/components.js";
import SectionTabsTwo from "./Sections/SectionTabsTwo";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Arquitectura de la información y usabilidad"
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/bg4.svg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Usabilidad.</h1>
                <h3 className={classes.subtitle}>
                  La verdadera usabilidad es invisible, Si algo anda bien, nadie se queja.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionBasics />
          <SectionTabsTwo />
          {/*<SectionNavbars />*/}
          <SectionPills />
          <SectionTabs />
         {/*<SectionNotifications />*/}
          {/*<SectionTypography />*/}
        <SectionJavascript />
          {/*<SectionCarousel />*/}
          {/*<SectionCompletedExamples />
        <SectionLogin /> */}
          {/*<GridItem md={12} className={classes.textCenter}>
          <Link to={"/login-page"} className={classes.link}>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
          </Link>
        </GridItem>*/}
          {/*
         <SectionExamples />
         <SectionDownload /> */}
      </div>
      <Footer />
    </div>
  );
}
