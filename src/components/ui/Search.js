import React,{useState} from 'react'

const Search = ({getQuery, getLoading}) => {
    const [text, setText] = useState('');
    const onChange = (q) => {
        setText(q);
        getQuery(q);
        getLoading(false);
    };
    return (
        <section className="search">
            <form>
                <input type="text" 
                className="form-control" 
                placeholder="Search Characters.." 
                value={text} 
                onChange={(e)=> onChange(e.target.value)} 
                autoFocus />
            </form>
        </section>
    )
}

export default Search
