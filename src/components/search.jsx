import React from 'react';
import 'react-multi-carousel/lib/styles.css';

function Search(props) {
  

  return (
    <form className="d-flex" onSubmit={props.onSubmit} style={{height:'30px',backgroundColor:"#120241",marginTop:'10px',marginRight:'5px',width:'60%'}}>
           <input type="search" onChange={props.onChange}  value={props.value} className="form-control input-sm search"/>
           <button style={{ color:'white',border:'none',marginLeft:'3px',backgroundColor:"#120241",fontSize:'20px'}} ><i className="fa-solid fa-magnifying-glass" ></i></button>
        </form>

  )
}
export default Search;