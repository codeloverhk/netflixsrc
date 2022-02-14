import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import Sdata from './Sdata';
import './index.css';

function ncard(val) {
    return (
        <Card
imgscr = {val.imgscr}
title = {val.title}
sname = {val.sname}
link = {val.link}
/>
    );
}


ReactDOM.render(
<>
<h3 className ="heading_style"> List of 5 best Netflix Series in 2020</h3>
{Sdata.map(ncard)}
</>,document.getElementById('root')
);