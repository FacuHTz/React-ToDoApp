import React from 'react';
import PortalReactDOM from 'react-dom';


import "./Modal.css";




function Modal ({children}){
 
    return PortalReactDOM.createPortal(
        <div className="ModalBackground">
      {children}
      <input type="text"/>
    </div>,
    document.getElementById('modal')
        
    );
}

export {Modal};