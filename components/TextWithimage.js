import {Grid, makeStyles, Typography} from "@material-ui/core";
import logo from '../logo.svg';

const useStyles = makeStyles((theme)=> ({
    container: {
        background: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText,
        padding: '4vw 12vw',
    },
    img: {
        width: '100%',
        height: 'auto',
}
}));

export const Description = (props) => {
    return <Grid item xs><Typography variant="body1">{props.description}</Typography></Grid>
}
export const TextToTheRigth = (props) => {
    return (
        <Grid container direction={"row"} justify={"space-around"} alignItems={"center"} spacing={3}>
            <Grid item xs={4}>
                <img className={props.classes.img} src={props.content.img}  alt="imagenes"/>,
            </Grid>
                 <Grid item xs xs={4}>
                     <Grid container direction={"column"} justify={"space-around"} alignItems={"center"} spacing={3}>
                         <Grid item xs>
                             <Typography variant="h6">{props.content.title}</Typography>
                         </Grid>
                         <Grid item xs>
                             <Typography variant="body1"><b>{props.content.subTitle}</b>Utilizar datos de localización geográfica precisa. Analizar activamente las características del dispositivo para su identificación. Almacenar o acceder a información en un dispositivo. anuncios y contenido personalizados, medición de anuncios y del contenido, información sobre el público y desarrollo de productos..</Typography>
                         </Grid>
                         {props.content.descriptions.map((description) => (
                            <Description description={description} />
                         ))}
                     </Grid>
                 </Grid>
        </Grid>
    );
};

const TextToTheLeft = (props) => {
  return (
     <Grid container direction={"row"} justify={"space-around"} alignItems={"center"} spacing={3}>
       <Grid item xs={4}>
         <Grid container direction={"column"} justify={"space-around"} alignItems={"center"} spacing={3}>
            <Grid item xs>
                 <Typography variant="h6">Back End DEVELOPER</Typography>
             </Grid>
            <Grid item xs>
                <Typography variant="body1">Utilizar datos de localización geográfica precisa. Analizar activamente las características del dispositivo para su identificación. Almacenar o acceder a información en un dispositivo. anuncios y contenido personalizados, medición de anuncios y del contenido, información sobre el público y desarrollo de productos..</Typography>
            </Grid>
            <Grid item xs>
                <Typography variant="body1">Utilizar datos de localización geográfica precisa. Analizar activamente las características del dispositivo para su identificación. Almacenar o acceder a información en un dispositivo. anuncios y contenido personalizados, medición de anuncios y del contenido, información sobre el público y desarrollo de productos..</Typography>
            </Grid>
            <Grid item xs>
                <Typography variant="body1">Utilizar datos de localización geográfica precisa. Analizar activamente las características del dispositivo para su identificación. Almacenar o acceder a información en un dispositivo. anuncios y contenido personalizados, medición de anuncios y del contenido, información sobre el público y desarrollo de productos..</Typography>
            </Grid>
            <Grid item xs>
                <Typography variant="body1">Utilizar datos de localización geográfica precisa. Analizar activamente las características del dispositivo para su identificación. Almacenar o acceder a información en un dispositivo. anuncios y contenido personalizados, medición de anuncios y del contenido, información sobre el público y desarrollo de productos..</Typography>
            </Grid>
        </Grid>
       </Grid>
        <Grid item xs={4}>
            <img className={props.classes.img}
                 src={"logo"} alt="description image" />
        </Grid>
      </Grid>
    );
};
export function TextWithimage(props) {
    const classes = useStyles();
    return (
      <div className={classes.container}>
          {props.textToTheRight ? (
              <TextToTheRight classes={classes} content={props.content}/>
            ):(
              <TextToTheLeft classes={classes} content={props.content}/>
            )}
      </div>
    );
}



