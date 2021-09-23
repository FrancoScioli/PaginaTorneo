import React, { useState, Component } from 'react';
import { render } from 'react-dom';
import '../styles/styles.css';
import logoLM from '../Images/logoCCLM.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import Ddown from './Navbar/Ddown';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


function Header(){
        const[open,setOpen] = useState(false);
        const handleClose = () => {
            setOpen(false);
          };
        const handleToggle = () => {
            setOpen(!open);
          };
        const useStyles = makeStyles((theme) => ({
            backdrop: {
              zIndex: theme.zIndex.drawer + 1,
              color: '#fff',
            },
        }));
        const classes = useStyles();
        const [click,setClick] = useState(false);
        const handleClick = ()=> setClick(!click);
    return(
            <div>
                <header className="header">
                    <div className="barMenu">
                        <Button variant="outlined" color="#fff" onClick={handleToggle}>
                            <i>
                                {open ? <FaTimes size={50}/> : <FaBars size={50}/>}
                            </i>
                        </Button>
                        <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                            <Ddown/>
                        </Backdrop>
                    </div>
                    <div>
                        <a href="/">
                            <img src={logoLM} alt="logo"></img>
                        </a>
                    </div>
                </header>               
            </div>

        )
}

export default Header;