"use client";
import { useEffect, useState } from "react";
import { getGlobalQuery } from "../data/loaders";
import { store } from "@/app/featured/store";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import { Provider } from "react-redux";
import { Header as IHeader } from "../types";

const loader = async () => {
  const {data} = await getGlobalQuery();
  if (!data) throw new Error("no data");
  return { header: data?.header };
};


const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  const [headerData, setHeaderData] = useState<IHeader>();
  
  useEffect(() => {
    const getGlobal = async () => {
      const { header } = await loader();
      setHeaderData(header);
    };
    getGlobal();
  }, []);
  return (
    <Provider store={store}>
      <Header data={headerData} />
      {children}
      <Footer />
    </Provider>
  );
};

export default ReduxProvider;
