import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    search:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "30px"
    },

    input:{
        padding: "10px",
        border: "0px",
        width: "100%",
    },
    error:{
        color: "red"
    },
    button:{
        padding: "10px",
        border: "0px",
        backgroundColor: "#1F53E5",
        color: "white",
        width: "100px",
    },
    container:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        minWidth:"150px",
    },
    
})