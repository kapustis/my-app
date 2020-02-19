import React from 'react'
import classes from './Loader.module.scss'

const Loader = props => (
    <div className={classes.loader}>
        <div className={classes.l_main}>
            <div className={classes.l_square}><span/><span/><span/></div>
            <div className={classes.l_square}><span/><span/><span/></div>
            <div className={classes.l_square}><span/><span/><span/></div>
            <div className={classes.l_square}><span/><span/><span/></div>
        </div>
    </div>
);

export default Loader
