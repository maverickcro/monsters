import React from 'react';
import Card from '../card/card.component';
import './card-list.component.css';

const cardList = props => (
 <div className='card-list'>
    {props.monsters.map(monster => 
          
        (<Card key={monster.key} monster={monster}></Card>)
      )}
      </div>
);

export default cardList;