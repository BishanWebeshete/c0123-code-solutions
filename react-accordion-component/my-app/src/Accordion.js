import React, { useState } from 'react';
export default function Accordion({topics}){
  const [activeId, setActiveId] = useState(0);
  return (
    <div>
      {topics.map((topic) => (
        <AccordionBox
          key={topic.id}
          title={topic.name}
          details={topic.details}
          isActive={activeId === topic.id}
          showDetails={() => activeId === topic.id ? setActiveId(0) : setActiveId(topic.id)}
        />))}
    </div>
  );
}

function AccordionBox({title, details, isActive, showDetails}){
  return (
    <div>
      <div onClick={showDetails}>
        <h1>{title}</h1>
      </div>
      {isActive ? (<AccordionBoxDetails details={details} />) : undefined}
    </div>
  )
}

function AccordionBoxDetails({details}) {
  return (
    <div><h4>{details}</h4></div>
  )
}
