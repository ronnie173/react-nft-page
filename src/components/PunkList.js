import React from 'react';
import CollectionCard from "./CollectionCard";
import './PunkList.css'
const PunkList = ({punkListData}) => {
  return (
    <div className='punkList'>
      {
        // eslint-disable-next-line array-callback-return
        punkListData.map(punk => (
          < CollectionCard
           key={punk.token_id}
           id={punk.token_id}
           name={punk.name}
           traits={punk.traits}
           image={punk.image_url}
          />
        ))
      }
    </div>

  )
}

export default PunkList;
