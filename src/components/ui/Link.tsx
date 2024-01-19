import NextLink, { type LinkProps } from "next/link";
import { cn } from "@/lib/utils";

type Props = LinkProps & {
  external?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function Link({ external, className, children, ...props }: Props) {
  const externalProps = external
    ? { rel: "noopener noreferrer", target: "_blank" }
    : {};
  return (
    <NextLink
      className={cn(
        "after:bg-gradient-to-r relative font-medium text-accent after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:from-accent after:from-0% after:to-accent2 after:to-100% after:transition-transform after:duration-[250ms] after:content-[''] hover:after:origin-bottom-left hover:after:scale-x-100 dark:text-secondary-foreground",
        className,
      )}
      {...externalProps}
      {...props}
    >
      {children}
    </NextLink>
  );
}
