import React, { useEffect, useRef, useState } from "react";

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
  const [isPlaceholder, setIsPlaceholder] = useState(false);
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
      if (placeholderRef && placeholderRef.current && isPlaceholder) {
        observer.observe(placeholderRef.current);
      }
    }
  }, [src, isPlaceholder]);

  return (
    <>
      {isLoading && (
        <img
          src={placeholderSrc}
          alt=""
          className={placeholderClassName}
          style={placeholderStyle}
          ref={placeholderRef}
          onLoad={() => setIsPlaceholder(true)}
        />
      )}
      <img
        src={view}
        alt={alt}
        className={className}
        onLoad={() => setIsLoading(false)}
        style={isLoading ? {display: "none"} : style}
        ref={imageRef}
      />
    </>
  );
};

export default LazyImage;
