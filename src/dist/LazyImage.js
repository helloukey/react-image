import { useEffect, useRef, useState } from "react";

const LazyImage = ({
  placeholderSrc,
  placeholderClassName,
  placeholderStyle,
  src,
  alt,
  className,
  style,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [view, setView] = useState("");
  const placeholderRef = useRef();
  const imageRef = useRef();

  useEffect(() => {
    if (document.readyState === "complete") {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setView(src);
          observer.unobserve(placeholderRef.current);
        }
      });
      if (placeholderRef && placeholderRef.current) {
        observer.observe(placeholderRef.current);
      }
    }
  }, [src]);

  return (
    <>
      {isLoading && (
        <img
          src={placeholderSrc}
          alt=""
          className={placeholderClassName}
          style={placeholderStyle}
          ref={placeholderRef}
        />
      )}
      <img
        src={view}
        alt={alt}
        className={isLoading ? "hidden" : className}
        onLoad={() => setIsLoading(false)}
        style={style}
        ref={imageRef}
      />
    </>
  );
};

export default LazyImage;
