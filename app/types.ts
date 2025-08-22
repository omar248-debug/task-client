export type LinkProps = {
  id: number;
  text: string;
  href: string;
  isExternal: boolean;
  dropdown: LinkProps[];
};

export type ImageProps = {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string;
};

export type LogoProps = {
  logoText: string;
  image: ImageProps;
};

export type Header = {
  data: {
    logo: LogoProps;
    navigation: LinkProps[];
    cta: LinkProps;
  };
};

type ComponentType =
  | "blocks.hero-block"
  | "blocks.team-block"
  | "blocks.testimonials-block";

interface Base<
  T extends ComponentType,
  D extends object = Record<string, unknown>
> {
  id: number;
  __component?: T;
  documentId?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  data?: D;
}

export type Block = HeroSection | OurTeam | OurClient;

export type AllServices = {
  id:number
  heading: string;
  content: string;
  description: string;
  pointsLink: { id: number; text: string }[];
};
export interface HeroSection extends Base<"blocks.hero-block"> {
  heading: string;
  bgImage: ImageProps;
  personImage: ImageProps;
  description: string;
  cta: LinkProps;
}

export type TeamMember = {
  memberName: string;
  memberPosition: string;
  memberEmail: string;
  memberNumber: string;
  memberWhatsApp: string;
  memberPhoto: ImageProps;
};
export interface OurTeam extends Base<"blocks.team-block"> {
  heading: string;
  description: string;
  member: TeamMember[];
}
export type Client = {
  clientSaying: string;
  clientName: string;
  clientPosition: string;
  clientPhoto: ImageProps;
};
export interface OurClient extends Base<"blocks.testimonials-block"> {
  heading: string;
  description: string;
  review: Client[];
}
