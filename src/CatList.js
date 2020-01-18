// write your CatList component here
import React from 'react';

const CatList = ({catPics}) => {
    return(
        <div>
            {catPics.map(catPic => <img src={catPic.url} key={catPic.id} alt='pic of a cat' />)}
        </div>
    )
}

export default CatList;