import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronRight } from "lucide-react";
import { SubTitle } from "../typography";

export const Breadcrumbs = ({ previous, previousLocation, current }: any) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={previousLocation}>
            <SubTitle variant="H8">{previous}</SubTitle>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SubTitle variant="H8">
            <ChevronRight />
          </SubTitle>
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>
            <SubTitle variant="H8">{current}</SubTitle>
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
