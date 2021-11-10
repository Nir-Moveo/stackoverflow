import mondaySdk from "monday-sdk-js";
import React, { useEffect, useState } from "react";
import axios from 'axios'
import { CardList } from "./CardList";
import { Search } from "./Search";
import { Sort } from "./Sort";

export const Main = ()=>{
  const [errorMessage, setErrorMessage] = useState("");
  const [_data,setData]=useState([]);
  const monday = mondaySdk();
  const [title,setTitle]=useState("")
  const [itemId,SetItemId]=useState("");
  const [sort,setSort]=useState("relevance")
  monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjEzMjIzNDYwOSwidWlkIjoyNTAzNjQ0NywiaWFkIjoiMjAyMS0xMS0wOVQwODozNzowMS4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTEwMjMyOCwicmduIjoidXNlMSJ9.IIQfjOKJy3LwsBynwfyTV7QuNk6aPJdwjs1dfgZsAok');
  const fetchStack = async () => {
    try{
      console.log(title);
      
   const data= await axios({
      method: 'get',
      url:`https://api.stackexchange.com/2.3/search/advanced?order=desc&sort=${sort}&q=${title}&site=stackoverflow&filter=!nKzQUR3Egv`
    })       
     console.log(data);
      // _data=data.data.items;
    setData(data.data.items)

  }
  catch (err){
    console.log(err);
    
  }
  }
  const fetchApi = async (titleSerach?:string) => {
    try {
      let itemId;

       if(!titleSerach){
      await monday.listen("context", async (res) => {
        console.log(res);
        
         itemId=res.data.itemId; 
         
         
        await monday.api(`query { items (ids: ${itemId}) { name }}`).then((res)=>{
       setTitle(res.data.items[0].name);
       console.log(title);
       
      }).catch((err)=>{
        console.log(err); 
      })
      });

    }
    else{
       setTitle(titleSerach);
    }
    fetchStack();
    } catch (err) {
      setErrorMessage("Something went wrong");
    }

  };

  useEffect(() => {
    fetchApi();
  }, [title,sort]);
  return (<>
    <Search input={title} fetchApi={fetchApi}/>
    <Sort setSort={setSort}></Sort>
    <CardList cards={_data}/>
    </>
  );
};
