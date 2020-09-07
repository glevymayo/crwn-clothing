import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    <div className={`${size} menu-item`}>
        <div className="background-image"
             style={{
                 backgroundImage:`url(${imageUrl})`
             }} />
        <div className="content" onClick={ () => history.push(`${linkUrl}`)}>
            <div className="title">{title.toUpperCase()}</div>
            <div className="subtitle">SHOP NOW</div>
        </div>
    </div>
)

export default withRouter(MenuItem);