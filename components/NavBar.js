import {AppBar, IconButton, Toolbar, Typography, makeStyles} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export function NavBar(){
    const classes = useStyles();
    return (
        <div className={"classes.root"}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="primary" className={"classes.useStyles.title"}>
                        Olga Caparrós López
                    </Typography>
                    <Button color="primary">Acerca de mi</Button>
                    <Button color="primary">Estudios</Button>
                    <Button color="primary">Trabajos</Button>
                    <Button color="primary">Contacto</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}