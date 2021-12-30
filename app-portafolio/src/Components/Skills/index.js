import React from 'react';
import data from '../../data/skills';
import './style.css';


function Skills() {
  return (
      <div>
        <h1 className='title-skills'>skills</h1>
        <div className='container'>
        {
          data.map(({ id, dev, list}) => (
            <div  key = { id }>
              <h3>{ dev }</h3>
              <div className='icons-container'>
                {
                  list.map(({ name, icon, id }) => (
                    <div className='icons' key={id}>
                      <img src={ icon } alt={ name } />
                      <p>{ name }</p>
                    </div>
                    ))
                }
                </div>
            </div>
          ))
        }
        </div>
      </div>
  );
};

export default Skills;
