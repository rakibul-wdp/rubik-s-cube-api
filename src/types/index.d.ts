declare interface IChildren {
  children: React.ReactNode;
}
declare interface IClassName {
  className?: string;
}
declare interface IChildrenClassName extends IChildren, IClassName {}

declare type IPlanDuration = "monthly" | "yearly" | "custom";
declare interface IPrice {
  id: number;
  title: string;
  description: string;
  price: string;
  duration: IPlanDuration;
  offer: {
    id: number;
    include: string;
  }[];
  icon?: JSX.Element;
  offerLevel?: string;
}
