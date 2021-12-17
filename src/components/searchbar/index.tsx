// @flow 
import { Box } from '@material-ui/core';
import React, {useState } from 'react';
import {useStyles} from "./style"
import api from '../../services/api';

function SearchBar({setResponse}: {setResponse: (value: []) => void}){
    const style = useStyles();
    const [input, setInput] = useState("")
    const [error, setError] = useState("");
    const consumirApi = () =>{
        api
        .get(`${input}`)
        .then((response) => {
            if(response.data.hits.length === 0){
                setError("Nada foi encontrado")
            }else{
                setError("")
            }
            setResponse(response.data.hits)
        })
        .catch((err) => console.log(err));
    }
    
    
    return(
        <Box className={style.container}>
            <h1>{process.env.REACT_APP_TITLE}</h1>
            <Box className={style.search}>
            <input className={style.input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='Busque seu autor ou livro...' />
            <button onClick={consumirApi} className={style.button}>Pesquisar</button>
            </Box>
            {!!error && <span className={style.error}>{error}</span>}
        </Box>
    )
}

export default SearchBar;