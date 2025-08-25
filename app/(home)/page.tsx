"use client";
import { notFound } from "next/navigation";
import { getHomePage } from "../../data/loaders";
import { Suspense, useEffect, useState } from "react";
import { BlockRenderer } from "../_components/RendererBlocks";
import { useSelector } from "react-redux";
import { RootState } from "../../featured/store";
import { Block } from "../types";
import Loading from "../loading";

// loader data for home page

const Home = () => {
  const [data, setData] = useState<{ blocks: Block[] }>({ blocks: [] });
  const lang = useSelector((state: RootState) => state.lang.lang);
  useEffect(() => {
    const loader = async () => {
      const { data } = await getHomePage();

      if (!data) notFound();
      setData(data);
    };
    loader();
  }, [lang]);
  console.log(data);

  if (!(data.blocks.length > 0)) {
    return <Loading />;
  }
  return <BlockRenderer blocks={data?.blocks || []} />;
};

export default Home;
