import React,{useState} from 'react'
import Checkbox from './Checkbox';

const Search = ({getQuery, getLoading, getResult}) => {
    const [text, setText] = useState('');
    const [checked, setChecked] = React.useState(false);

    const onChange = (q) => {
        setText(q);
        getQuery(q);
        getLoading(false);
    };

    const changeResult =(bool)=>{
        getResult(bool);
    }

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
            <Checkbox checked={checked} setChecked={(val)=>setChecked(val)} onChange={changeResult(checked)}/>
        </section>
    )
}

export default Search
