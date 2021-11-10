import React, { useRef } from "react";
import { SearchArea, SearchContainer, SearchIcon } from "./SearchStyle";
import search from "../assets/search.png";

export const Search = (props:{input:string, fetchApi:(input:string)=>void}) => {
const inputEl = useRef(null);

  const onChange=()=>{
    if(inputEl && inputEl.current){
       const d= inputEl.current as HTMLInputElement;
       props.fetchApi(d.value);
    }
 
  
    // console.log(d.value);
    // props.fetchApi(inputEl);
  }
  return <SearchContainer>
    <SearchArea ref={inputEl} placeholder={props.input} type="text" ></SearchArea>
    <SearchIcon src={search} onClick={()=>onChange()}></SearchIcon>
  </SearchContainer>;
};
