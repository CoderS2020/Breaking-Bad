import React,{useState} from 'react'

const Search = ({getQuery}) => {
    const [text,settext]=useState('');
    const onChange=(q)=>{
        settext(q);
        getQuery(q);
    }
    return (
       <section className='search'>
           <form>
               <input type='text' className='form-control'value={text} onChange={(e)=>{
                   onChange(e.target.value);
               }} placeholder='Search Characters' autoFocus/>
           </form>
       </section>
    )
}

export default Search
