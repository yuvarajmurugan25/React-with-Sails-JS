import '../assests/css/searchBar.css';
import {PureComponent} from 'react';
import {IoSearchOutline,IoCloseOutline} from 'react-icons/io5';

export default class Search extends PureComponent{
    constructor(props){
        super(props)
        this.state = {
            hits:null
        }
    }
    async change(e){
        const v = e.target.value;
        console.log(v);
        // if(v){
        //     const {hits} = await Product_Search({cn:3,o:v});
        //     this.setState({
        //         hits
        //     });
        //     console.log(hits);
        // }else{
        //     this.setState({
        //         hits:null
        //     });
        // }

    }
    hits(){
        const {hits} =  this.state;
        if(hits.length){
            return hits.map((h,i)=>{
                return(
                    <li onClick={e=> e.stopPropagation()} key={i}>
                        <a dangerouslySetInnerHTML={{__html:h._highlightResult.name.value}} to='/'>
                        </a>
                    </li>
                )
            });
        }else{
                return (
                    <li className='no' key={1} onClick={e=> e.stopPropagation()}>
                        <a to='/'>
                            <em>No result found</em>
                        </a>
                    </li>
                )
        }
    }
    render() {
        console.count('Im search');
        return (
            <span className='srh'>
                <input id='forSearch' hidden type={"checkbox"} onChange={()=>(document.getElementsByClassName('t-h-ba')[0].classList.toggle('dis-n'),document.getElementById('search-input').focus())}></input>
                <label htmlFor="forSearch">
                        <IoSearchOutline  size={25}/>
                </label>
                <span className='srh-so'>
                    <form autoComplete='off' role='search' id='search' onReset={(e)=>(this.setState({hits:null}),(e.target.elements['search-input'].validity.valueMissing && (document.getElementById('forSearch').checked = false,document.getElementsByClassName('t-h-ba')[0].classList.toggle('dis-n'))))}>
                        <input id='search-input' name='search'  required type={"text"} onInput={this.change.bind(this)}/>
                        <button type='reset'><IoCloseOutline size={25} /></button>
                    </form>
                </span>
                <ul className='srh-r' onClick={e=>(document.getElementById('forSearch').checked = false,document.getElementsByClassName('t-h-ba')[0].classList.toggle('dis-n'))}>
                    {
                        this.state.hits && this.hits()
                    }
                </ul>
            </span>
        );
    }
}
