import type { AnchorHTMLAttributes, ReactNode } from 'react';

type SourceLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'children' | 'href'
> & {
  href: string;
  children?: ReactNode;
};

function getFileName(href: string) {
  const path = href.split('#', 1)[0];
  return decodeURIComponent(path.slice(path.lastIndexOf('/') + 1));
}

export function SourceLink({ href, children, ...props }: SourceLinkProps) {
  const fileName = children ?? getFileName(href);

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="not-prose my-2 inline-flex items-center gap-2 rounded-lg border bg-fd-card px-3 py-2 text-sm text-fd-card-foreground shadow-sm transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
      {...props}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-4 shrink-0"
        fill="currentColor"
      >
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.015-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.084-.729.084-.729 1.205.084 1.839 1.236 1.839 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
      <span>
        <span className="text-fd-muted-foreground">源代码</span>
        <span aria-hidden="true" className="mx-1.5 text-fd-border">
          ·
        </span>
        <code className="font-mono text-[0.8125rem]">{fileName}</code>
      </span>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-3.5 shrink-0 text-fd-muted-foreground"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M7 17 17 7" />
        <path d="M7 7h10v10" />
      </svg>
    </a>
  );
}
