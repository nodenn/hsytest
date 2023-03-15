/* eslint-disable */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import defaultImage from "@/assets/img/FVHbUthUYAEcr2u.jpg";

function ImageDefault({ src, fallbackSrc, alt = "", ...rest }) {
  const [imgSrc, setImgSrc] = useState(src);
  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      {...rest}
      src={!imgSrc ? defaultImage : imgSrc}
      alt={alt}
      onLoadingComplete={(result) => {
        if (result.naturalWidth === 0) {
          // Broken image
          setImgSrc(defaultImage);
        }
      }}
      onError={() => {
        setImgSrc(defaultImage);
      }}
    />
  );
}

ImageDefault.defaultProps = {
  type: "default",
};

export default ImageDefault;
// export default React.memo(ImageFallback);
