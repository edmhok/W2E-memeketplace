import { ReactNode } from "react";
export interface BreadcrumbsProps {
    prevLink: string;
    prevLabel: ReactNode;
    currentLabel: ReactNode;
    fontSize?: string;
}
export declare function Breadcrumbs({ prevLabel, currentLabel, prevLink, fontSize }: BreadcrumbsProps): JSX.Element;
//# sourceMappingURL=Breadcrumbs.d.ts.map