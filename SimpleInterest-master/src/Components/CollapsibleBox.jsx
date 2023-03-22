import React from 'react';
import Collapsible from 'react-collapsible';
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";


export default function CollapsibleBox({ heading, headingBold = false, content, last = false }) {
  let weight = 500;
  if (headingBold) {
    weight = 600;
  }
  const style = {
    cursor: 'pointer',
    fontWeight: weight,
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0.5rem',
  }
  return (
    <>
      <Collapsible
        trigger={[heading, <HiOutlineChevronDown style={{ flexShrink: 0, color: '#005CFF', width: '18px', height: '18px' }} />]}
        triggerWhenOpen={[heading, <HiOutlineChevronUp style={{ flexShrink: 0, color: '#005CFF', width: '18px', height: '18px' }} />]}
        triggerStyle={style}
      >
        {content}
      </Collapsible >

      {/* line */}

      {last ? <div className='mb-1'></div> : <div style={{ width: 100 + '%', height: '0px', border: '0.5px solid #C4C4C4', opacity: 1, marginTop: '0.5rem', }}></div>}

    </>
  );
}