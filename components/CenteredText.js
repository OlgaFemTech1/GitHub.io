import {Grid, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme)=> ({
   container: {
      background: theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
      padding: '4vw 12vw',
   },
}));

export function CenteredText () {
    const classes = useStyles();

    return (

         <Grid container className={classes.container} direction="column" justify="space-around" alignItems="center" spacing={3}>
          <Grid item xs>
            <Typography variant="body1" align={"center"} guitterButton={"true"}>

                Soy curiosa y me entusiasma aprender cosas nuevas así que aquí estoy aprendiendo a programar y ampliando percepciones...
          </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="body1">
                <b>Estoy cursando un Bootcam de Full Stack en factoria f5, de 850h de duración. "Promo FemTech1 2021.</b>
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="body1">
                Realmente me está resultando algo así como si intentase "meter el campo en una bota" debido a la cantidad de nueva información que llega en un breve espacio de tiempo.
                ¡Todo un reto!! Estoy disfrutando de la experiencia por diversos motivos: Un magnífico grupo de mujeres dispuestas a colaborar aprendiendo a crear equipo.
                Una manera intensa y práctica de adentrarse en el mundo de la programación y el teletrabajo.
            </Typography>
          </Grid>
        </Grid>
    );
}