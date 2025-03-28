import React from 'react'

export default function Hero({children}: {children?: string}) {
  return (
      <div>
        HEADER <br />
          <i> {children} </i>
          <br />
        FOOTER
      </div>
  );
}
