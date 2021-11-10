import React, { useRef } from "react";
import { setSyntheticTrailingComments } from "typescript";
import {  SortContainer } from "./SortStyle";

export const Sort = (props:{setSort:(newSortState:string)=> void}) => {
const inputEl = useRef(null);

  const onChangeHandler=()=>{
      //props.setSort()
      
      if(inputEl && inputEl.current){
        const d= inputEl.current as HTMLInputElement;
        props.setSort(d.value);
     }
    }
 
  
    // console.log(d.value);
    // props.fetchApi(inputEl);
  
  return (
  <select ref={inputEl} id="sort" name="sort" onChange={onChangeHandler}>
    <option value="relevance">Relevance</option>
    <option value="activity">Activity</option>
    <option value="votes">Votes</option>
    <option value="creation">Creation</option>
  </select>
  )
 
};