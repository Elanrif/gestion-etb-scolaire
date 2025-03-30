import React from 'react';

const Iframe: React.FC = () => {
  return (
    <div className='pb-10'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12981.368215058335!2d-5.362793059981272!3d35.56994831292783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sma!4v1743299197944!5m2!1sfr!2sma"
        width={'100%'}
        height={450}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Iframe;
