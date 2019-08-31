import React from 'react';
import './PHome.css';
import logo from '../../logo.svg';
import { OHeader } from '../../organisms';
import { TMain } from '../../templates'

const PHome = () =>{
  const blocks = [
    {logo , title:'Atoms' , content:'Atoms are the smallest possible components, such as buttons, titles, inputs or event color pallets, animations, and fonts. They can be applied on any context, globally or within other components and templates, besides having many states, such as this example of button: disabled, hover, different sizes, etc.'},
    {logo , title:'Molecules' , content:'They are the composition of one or more components of atoms. Here we begin to compose complex components and reuse some of those components. Molecules can have their own properties and create functionalities by using atoms, which don’t have any function or action by themselves.'},
    {logo , title:'Organism' , content:'Organisms are the combination of molecules that work together or even with atoms that compose more elaborate interfaces. At this level, the components begin to have the final shape, but they are still ensured to be independent, portable and reusable enough to be reusable in any content.'}
  ]

  const content = () => (
    <>
      <OHeader blocks={blocks}/>
    </>
  );

  const footer = () => (
    <>
      <p>React Atomic design Template - 2019</p>
    </>
  )

  return (
    <>
      <TMain content = {content()} footer = {footer()} />
    </>
  );
}

export default PHome;
