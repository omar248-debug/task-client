"use client";
import { notFound } from "next/navigation";
import { getHomePage } from "../data/loaders";
import { useEffect, useState } from "react";
import { BlockRenderer } from "../_components/RendererBlocks";
import { useSelector } from "react-redux";
import { RootState } from "../featured/store";
import { Block } from "../types";

// loader data for home page

const Home = () => {
  const [data, setData] = useState<{ blocks: Block[] }>({ blocks: [] });
  const lang = useSelector((state: RootState) => state.lang.lang);
  useEffect(() => {
    const loader = async () => {
      const { data } = await getHomePage();
      console.log(data);

      if (!data) notFound();
      setData(data);
    };
    loader();
  }, [lang]);

  return <BlockRenderer blocks={data?.blocks || []} />;
};

export default Home;
