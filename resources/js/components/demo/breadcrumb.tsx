import React from 'react'

export default function Breadcrumb({dslfsk ="JE SUIS LE ROI", jdskd}: {dslfsk: string, jdskd: number}) {
  return (
      <div>
          <p>
              Hello world : <span className="text-blue-500">{dslfsk}</span> ------ <span className='text-orange-500'>{jdskd}</span>
          </p>
      </div>
  );
}
