import React from 'react'

const QuotePopup = ({data, flag, setFlag}) => {
    const toggleClass=()=>{
        setFlag(!flag);
    }
    return (
        <div className={flag?'quotes quotesHidden': 'quotes quotesVisible'}>
            <div className="quote-list">
                <label onClick={toggleClass}>X</label>
                <p>{(data[0].length >0) ?data[0][0].quote : 'Nothing noteworthy was spoken by the character.'}</p>
                <i>--{data[1]}</i>
            </div>
        </div>
    )
}

export default QuotePopup
