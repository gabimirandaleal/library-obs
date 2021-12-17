import { Box } from '@material-ui/core';
import React from 'react';
import {useStyles} from "./style"
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PersonIcon from '@mui/icons-material/Person';
import LinkIcon from '@mui/icons-material/Link';

function Card({item}) {
    const style = useStyles();
    return(
        <Box className={style.container}>
            <Box className={style.info}>
                <PersonIcon className={style.icon}/>
                <span>Autor: {item.author ? item.author : "Não temos essa informação"}</span>
            </Box>
            <Box className={style.info}>
                <MenuBookIcon className={style.icon}/>
                <span>Livro: {item.title ? item.title : "Não temos essa informação"}</span>
            </Box>
            <Box className={style.info}>
                <LinkIcon className={style.link}/>
                <a rel="noreferrer" className={style.linkText} href={!!item.url ? item.url : null} target="_blank">{item.url ? item.url : "Não temos essa informação"}</a>
            </Box>
        </Box>
    )
}

export default Card;