import React from "react";
// react plugin for creating date-time-picker

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

// @material-ui/icons
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Close from "@material-ui/icons/Close";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Bibliografia from "../../../assets/img/biblio.svg"
import styles from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.js";


const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

export default function SectionJavascript() {
  const classes = useStyles();
  const [classicModal, setClassicModal] = React.useState(false);
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4} lg={4}></GridItem>
                <GridItem xs={12} sm={12} md={4} lg={4}>
                  <Button
                      color="info"
                      block
                      onClick={() => setClassicModal(true)}
                  >
                    <LibraryBooks className={classes.icon} />
                    Referencias bibliográficas
                  </Button>
                  <Dialog
                      classes={{
                        root: classes.center,
                        paper: classes.modal
                      }}
                      open={classicModal}
                      TransitionComponent={Transition}
                      keepMounted
                      onClose={() => setClassicModal(false)}
                      aria-labelledby="modal-slide-title"
                      aria-describedby="modal-slide-description"

                  >
                    <DialogTitle
                        id="classic-modal-slide-title"
                        disableTypography
                        className={classes.modalHeader}
                    >
                      <IconButton
                          className={classes.modalCloseButton}
                          key="close"
                          aria-label="Close"
                          color="inherit"
                          onClick={() => setClassicModal(false)}
                      >
                        <Close className={classes.modalClose} />
                      </IconButton>
                      <center><h4 className={classes.modalTitle}><strong>Referencias bibliográficas</strong></h4></center>
                      <center><img src={Bibliografia} alt="bib" style={{width:"30%", height:"30%"}} /></center>
                    </DialogTitle>
                    <DialogContent
                        id="modal-slide-description"
                        className={classes.modalBody}
                    >
                      <h5><strong>* </strong> https://magentaig.com/que-es-usabilidad/</h5>
                      <h5><strong>* </strong> http://www.webmati.es/index.php?option=com_content&view=article&id=12:que-es-accesibilidad&catid=13&Itemid=160</h5>
                      <h5> <strong>* </strong>https://www.w3c.es/Traducciones/es/WAI/intro/accessibility</h5>
                      <h5><strong>* </strong> https://blog.acantu.com/que-es-ux-y-ui/</h5>
                      <h5><strong>* </strong> https://rockcontent.com/es/blog/ui-ux/</h5>
                      <h5><strong>* </strong> http://ocw.uc3m.es/ingenieria-informatica/interfaces-de-usuario/contenidos/teoria/MC-F-002.pdf</h5>
                      <h5><strong>* </strong> https://www.daniloaz.com/es/que-es-la-arquitectura-web/</h5>
                      <h5><strong>* </strong> https://undraw.co/illustrations</h5>

                   </DialogContent>
                    <DialogActions
                    className={classes.modalFooter + " " + classes.modalFooterCenter}
                    >

                    </DialogActions>
                  </Dialog>
                </GridItem><GridItem xs={12} sm={12} md={4} lg={4}>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
