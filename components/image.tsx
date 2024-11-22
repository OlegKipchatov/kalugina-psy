"use client";

import { Image as ImageUI } from "@nextui-org/react";

export const Image = ({
  alt,
  src,
  className,
}: {
  alt: string;
  src: string;
  className?: string;
}) => <ImageUI alt={alt} className={className} src={src} />;
