import { VideoProps } from "@/utils/interface/interface";

export function Video({ src, width, height, title, className, style }: VideoProps) {
  return (
    <iframe
      width={width}
      height={height}
      src={src}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className={className}
      style={style}
    ></iframe>
  );
}
