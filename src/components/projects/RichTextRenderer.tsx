import { RichText } from "@graphcms/rich-text-react-renderer";
import Image from "next/image";
import Link from "next/link";

const RichTextRenderer = ({ content }: any) => {
  const bodyClasses = "md:text-lg";
  const headingClasses = " leading-snug tracking-tight font-semibold";

  return (
    <RichText
      content={content}
      renderers={{
        // ------------- //
        a: ({ children, openInNewTab, href, rel, ...rest }) => {
          if (href?.match(/^https?:\/\/|^\/\//i)) {
            return (
              <a
                href={href}
                target={openInNewTab ? "_blank" : "_self"}
                rel="noreferrer"
                {...rest}
                style={{ textDecoration: "underline" }}
              >
                {children}
              </a>
            );
          }
          return (
            <Link href={href || ""} className="underline">
              {children}
            </Link>
          );
        },
        // ------------- //
        img: ({ src, altText, height, width }) => (
          <Image
            src={src || ""}
            alt={altText || ""}
            className="!mx-auto max-w-full"
            width={width || 0}
            height={height || 0}
          />
        ),

        // ------------- //
        h1: ({ children }) => (
          <h1
            className={`mb-4  font-semibold text-lg md:text-2xl lg:text-3xl   ${headingClasses}`}
          >
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2
            className={`mb-4  font-semibold text-lg md:text-xl lg:text-2xl   ${headingClasses}`}
          >
            {children}
          </h2>
        ),
        // ------------- //
        h3: ({ children }) => (
          <h3
            className={`mb-4  font-semibold text-lg md:text-xl lg:text-2xl   ${headingClasses}`}
          >
            {children}
          </h3>
        ),
        h4: ({ children }) => (
          <h4
            className={`mb-4  font-semibold text-lg md:text-xl lg:text-2xl ${headingClasses}`}
          >
            {children}
          </h4>
        ),

        h5: ({ children }) => (
          <h5
            className={`mb-4 font-semibold text-lg md:text-xl lg:text-2xl  ${headingClasses}`}
          >
            {children}
          </h5>
        ),
        h6: ({ children }) => (
          <h6
            className={`mb-4 font-semibold text-lg md:text-xl lg:text-2xl  ${headingClasses}`}
          >
            {children}
          </h6>
        ),

        // ------------- //
        p: ({ children }) => (
          <p className={`my-4 ${bodyClasses} `}>{children}</p>
        ),
        // ------------- //

        bold: ({ children }) => <strong>{children}</strong>,
        // ------------- //

        // ------------- //
        // ------------- //
        ul: ({ children }) => (
          <ul className={`list-disc list-inside my-4 ${bodyClasses}`}>
            {children}
          </ul>
        ),
        // ------------- //
        // ------------- //
        ol: ({ children }) => (
          <ol className={`list-disc list-inside my-4 ${bodyClasses}`}>
            {children}
          </ol>
        ),
      }}
    />
  );
};

export default RichTextRenderer;
