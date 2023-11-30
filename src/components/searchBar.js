import '../assests/css/searchBar.css';
import {memo, useEffect} from 'react';
import {IoSearchOutline,IoCloseOutline} from 'react-icons/io5';
// import client from '../twitter';

function Search(){

    useEffect(()=>{
        // console.log(client);
    },[])
    async function change(e){
        const v = e.target.value;
        console.log(v);
    }
    return (
        <span className='srh'>
            <span className='srh-so'>
                <form autoComplete='off' role='search' id='search' onReset={(e)=>((e.target.elements['search-input'].validity.valueMissing))}>
                    <IoSearchOutline  size={25}/>
                    <input id='search-input' name='search'  required type={"text"} onInput={change}/>
                    <button type='reset'><IoCloseOutline size={25} /></button>
                </form>
            </span>
            <ul className='srh-r'>
                {
                    // this.state.hits && this.hits()
                }
            </ul>
        </span>
    );
}

export default memo(Search);
