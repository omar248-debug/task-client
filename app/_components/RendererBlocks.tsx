import { Block } from "../types";
import Clients from "./Clients";
import Hero from "./Hero";
import OurTeam from "./OurTeam";

function blockRenderer(block: Block, index: number) {
  switch (block.__component) {
    case "blocks.hero-block":
      return <Hero {...block} key={index} />;
    case "blocks.team-block":
      return <OurTeam {...block} key={index} />;
    case "blocks.testimonials-block":
      return <Clients {...block} key={index} />;
    default:
      return null;
  }
}

export function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return blocks.map((block, index) => blockRenderer(block, index));
}
