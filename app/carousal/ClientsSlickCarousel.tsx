"use client";

import * as React from "react";
import Image from "next/image";
import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Client } from "../types";

type Props = {
  clients: Client[];
};

export default function ClientsSlickCarousel({ clients }: Props) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className='mx-auto py-8 max-w-6xl px-4'>
      <Carousel setApi={setApi}>
        <CarouselContent>
          {clients?.map((client, index) => (
            <CarouselItem key={index}>
              <CardContent className='flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 p-6 md:p-12 rounded-2xl shadow-lg'>
                {/* صورة العميل */}
                <div className='flex-shrink-0 w-48 h-48 md:w-[374px] md:h-[374px] overflow-hidden rounded-lg'>
                  <Image
                    src={`${client.clientPhoto.url}`}
                    alt={client.clientPhoto.alternativeText || "client"}
                    width={374}
                    height={374}
                    className='object-cover w-full h-full'
                  />
                </div>

                {/* النصوص */}
                <div className='flex-1 text-center md:text-left'>
                  <p className='text-sm md:text-lg lg:text-xl text-gray-200 leading-relaxed mb-6'>
                    {client.clientSaying}
                  </p>
                  <h1 className='font-semibold text-lg md:text-2xl text-white'>
                    {client.clientName}
                  </h1>
                  <p className='text-gray-300'>{client.clientPosition}</p>
                </div>
              </CardContent>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* الأسهم تحت يمين */}
        <div className='flex justify-end gap-3 mt-6 pr-4'>
          <CarouselPrevious className='static translate-y-0 bg-[#643F2E] border-none text-white rounded-full hover:bg-[#7b5540]' />
          <CarouselNext className='static translate-y-0 bg-[#643F2E] border-none text-white rounded-full hover:bg-[#7b5540]' />
        </div>
      </Carousel>
    </div>
  );
}
