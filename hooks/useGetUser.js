"use client";
import { useState, useEffect } from "react";

export const useGetUser = (id) => {
  const [objData, setObjData] = useState({
    loading: true,
    data: null,
    error: false,
  });

  const getUser = async (id) => {
    try {
      const res = await fetch(`https://reqres.in/api/users/${id}`);
      const data = await res.json();
      setObjData({
        loading: false,
        data: data.data,
        error: null,
      });
    } catch (error) {
      setObjData({
        loading: false,
        data: null,
        error: error,
      });
    }
  };

  useEffect(() => {
    getUser(id);
  }, [id]);

  return [objData.loading, objData.data, objData.error];
};
