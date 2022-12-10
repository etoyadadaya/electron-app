type Styles = Record<string, string>;

declare module "*.svg" {
  import {FC, SVGProps} from "react";
  export const ReactComponent: FC<SVGProps<SVGSVGElement>>;

  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module '*.scss' {
  const content: Styles;
  export default content;
}
