import { useState } from "react";

const useArray = (initValue = []) => {
  const [arr, setArr] = useState(initValue);

  const addArrItem = (item) => setArr([ item, ...arr ]);

  const removeArrItem = (arrKey, rmVal) => setArr(arr.filter((arrItem) => arrItem[arrKey] !== rmVal));

  const updateArrItem = (item, arrKey) => setArr(arr.map((arrItem) => arrItem[arrKey] === item[arrKey] ? item : arrItem));

  const findArrItem = (arrKey, arrVal) => arr.find((arrItem) => arrItem[arrKey] === arrVal);

  return { arr, addArrItem, removeArrItem, updateArrItem, findArrItem };
};

export default useArray;
