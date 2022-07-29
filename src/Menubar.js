import React from "react";
import { useCallback, useState } from "react";
import { axios } from "axios";
import Matzip from "./Matzip";

const Menubar = ({ apiUrl }) => {
  const [loading, setLoading] = useState(true);
  const [storeList, setStoreList] = useState([]);
  const [category, setCategory] = useState("all");
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState([]);

  const getStoreList = () => {
    setLoading(true);
    axios.get(`${apiUrl}/${category}`).then((response) => {
      console.log(response);
    });
  };

  return (
    <>
      <ul>
        {storeList.map((element) => (
          <Matzip
            key={element.id}
            title={element.name}
            category={element.category}
          />
        ))}
      </ul>
    </>
  );
};
export default Menubar;
