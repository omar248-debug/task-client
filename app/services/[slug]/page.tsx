import { getPageBySlug } from "@/app/data/loaders";
import { AllServices } from "@/app/types";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiChevronLeft } from "react-icons/fi";

type Props = {
  params: Promise<{ slug: string }>;
};

async function loader(slug: string) {
  const { data } = await getPageBySlug(slug);
  if (data.length === 0) notFound();
  console.log(data);

  const blocks: AllServices[] = data[0]?.blocks.map((b: any) => ({
    id: b.id,
    __component: b.__component,
    heading: b.heading,
    description: b.description,
    pointsLink: b.pointsLink,
  }));
  const info = { heading: data[0].heading, content: data[0].content };
  return { blocks, info };
}

export default async function ServicePage({ params }: Props) {
  const {slug} = (await params);
  const { blocks, info } = await loader(slug);

  return (
    <div className='px-10 py-6'>
      <Link href='/' className='flex items-center gap-1 hover:underline w-fit'>
        <FiChevronLeft size={18} /> Back
      </Link>
      <div className='pt-14'>
        <h1 className='text-primary font-bold text-2xl pb-12'>
          {info.heading}
        </h1>
        <p>{info.content}</p>
      </div>
      <div className='mt-6 space-y-6'>
        {(blocks as unknown as AllServices[]).map((block) => (
          <div key={block.id} className='p-4'>
            <h2 className='text-sm md:text-base font-bold text-primary pb-5'>
              {block.heading}
            </h2>
            <div className='flex gap-9'>
              <p className='border-l-4'></p>
              <div className='flex gap-4'>
                <div className='flex-shrink-0 w-4 h-4 bg-primary rounded'></div>
                <p className='font-semibold text-sm md:text-base'>
                  {block.description}
                </p>
              </div>
            </div>
            <div className='pl-10 pt-5 flex flex-col gap-2'>
              {block.pointsLink?.map((link, idx) => (
                <div key={idx}>
                  <p>- {link.text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
