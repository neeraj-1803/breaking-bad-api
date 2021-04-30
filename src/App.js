import './App.css';
import Header from './components/ui/Header';
import React,{useState, useEffect} from 'react';
import axios from 'axios';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';
import QuotePopup from './components/ui/QuotePopup';

const App =()=> {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [spinoff, setSpinoff] = useState(false);
  const [quoteData, setQuoteData] = useState([]);
  const [flag, setFlag] = useState(true);

  useEffect(()=>{
    const fetchItems = async() => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      console.log(result.data);
      if(spinoff){
        // eslint-disable-next-line
        const betterCallSaulData = result.data.filter((item)=>{
          if(item.better_call_saul_appearance.length >0)
            return item
        });
        setItems(betterCallSaulData);
      }else{
        setItems(result.data);
      }
      setIsLoading(false);
    }
    fetchItems();
  }, [query, spinoff]);

  const fetchQuotes = async(val)=> {
    const callApi = await axios(`https://www.breakingbadapi.com/api/quotes/${val[0]}`);
    setQuoteData([callApi.data, val[1]]);
    setFlag(false);
  }

  const toUpdateTheValues = (val)=>{
    fetchQuotes(val);
  }
  return (
    <div className="container">
      <Header />
      <Search getQuery={(q)=> setQuery(q)} getLoading={(bool)=>setIsLoading(bool)} getResult={(bool)=> setSpinoff(bool)}/>
      <CharacterGrid items={items} isLoading={isLoading} getCharID={(val)=>{
          toUpdateTheValues(val);
        }}/>
      {(!flag)?((quoteData.length>0) ? <QuotePopup data={quoteData} flag={flag} setFlag={(val)=>setFlag(!flag)}/>:''):''}
    </div>
  );
}

export default App;
