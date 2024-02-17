import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

import { Tooltip as ReactTooltip } from 'react-tooltip';


const WhatsAppButton = ({ phoneNumber, message }) => {
    const handleWhatsAppClick = () => {
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    };
  
    return (
      <>
        <button onClick={handleWhatsAppClick} data-tip="WhatsApp">
          <FaWhatsapp />
        </button>
        <ReactTooltip />
      </>
    );
  };

export default WhatsAppButton;
