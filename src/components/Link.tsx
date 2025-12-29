import { linkConfig } from "@/config/link";
import Link, { LinkProps } from "next/link";

import { AnchorHTMLAttributes, forwardRef } from "react";

type CustomLinkProps = LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    prefetch?: boolean;
  };

const CustomLink = forwardRef<HTMLAnchorElement, CustomLinkProps>(
  (props, ref) => {
    const { prefetch, ...rest } = props;

    // Use the passed prefetch prop if defined, otherwise fall back to global config
    const shouldPrefetch = prefetch !== undefined ? prefetch : linkConfig.defaultPrefetch;

    return <Link ref={ref} prefetch={shouldPrefetch} {...rest} />;
  }
);

CustomLink.displayName = "CustomLink";

export default CustomLink;
