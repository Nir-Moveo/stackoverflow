import mondaySdk from "monday-sdk-js";
import React, { useEffect, useState } from "react";

export const Search = () => {
  // const d =monday.listen("context", async (res)=>{
  //  return await res.data.itemId;
  // })
  const [errorMessage, setErrorMessage] = useState("");
  const monday = mondaySdk();
  const [itemId, setItemId] = useState("");

  const fetchApi = async () => {
    try {
      await monday.listen("context", (res) => {
        console.log(res.data);
        setItemId(res.data.itemId);
      });
      let query = `query { items (ids: [${itemId}]) { name }}`;

      fetch("https://api.monday.com/v2", {
        method: "post",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.MONDAY_API_KEY as string,
        },
        body: JSON.stringify({
          query: query,
        }),
      })
        .then((res) => res.json())
        .then((res) => console.log(JSON.stringify(res, null, 2)))
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);
  return <></>;
};
