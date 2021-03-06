import React from 'react'

const CharacterItem = ({item, getCharID}) => {
    return (
        <div className="card" onClick={()=>getCharID([item.char_id, item.name])}>
            <div className="card-inner">
                <div className="card-front">
                    <img src={item.img} alt='' />
                </div>
                <div className="card-back">
                    <h1>{item.name}</h1>
                    <ul>
                        <li>
                            <strong>Actor Name:</strong> {item.portrayed}
                        </li>
                        <li>
                            <strong>Nickname:</strong> {item.nickname}
                        </li>
                        <li>
                            <strong>Character Occupation:</strong> {item.occupation.reduce((total, curr)=>{return total+", "+curr})}
                        </li>
                        <li>
                            <strong>Birthday:</strong> {item.birthday}
                        </li>
                        <li>
                            <strong>Status:</strong> {item.status}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CharacterItem
