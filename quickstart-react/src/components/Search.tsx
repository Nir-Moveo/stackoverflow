import mondaySdk from "monday-sdk-js";
import React, { useEffect, useState } from "react";
import axios from 'axios'
import { CardList } from "./CardList";
import { ICard } from "./Card/Card";

export const Search = ()=>{
  const [errorMessage, setErrorMessage] = useState("");
  const [_data,setData]=useState([]);
  const monday = mondaySdk();
  let title="";

  monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjEzMjIzNDYwOSwidWlkIjoyNTAzNjQ0NywiaWFkIjoiMjAyMS0xMS0wOVQwODozNzowMS4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTEwMjMyOCwicmduIjoidXNlMSJ9.IIQfjOKJy3LwsBynwfyTV7QuNk6aPJdwjs1dfgZsAok');
  // const [itemId, setItemId] = useState("");
  const fetchStack = async () => {
    try{
   const data= await axios({
      method: 'get',
      url:`https://api.stackexchange.com/2.3/search/advanced?order=desc&sort=relevance&q=${title}&site=stackoverflow&filter=!nKzQUR3Egv`
    })
    console.log(data);
    setData(data.data.items)
    
  }
  catch (err){
    console.log(err);
    
  }
  }
  const fetchApi = async () => {
    try {
      await monday.listen("context", (res) => {
        console.log(res.data);
        const itemId=res.data.itemId; 
         
        monday.api(`query { items (ids: ${itemId}) { name }}`).then((res)=>{
        console.log(res.data.items[0].name);
        title=res.data.items[0].name;
        fetchStack();
      }).catch((err)=>{
        console.log({ err: "not okey",data: err}); 
      })
      });
     
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <CardList cards={_data}/>
  );
};
