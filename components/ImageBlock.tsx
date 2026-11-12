import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
};

export function ImageBlock({ src, alt, priority = false, className = "" }: Props) {
  return (
    <div className={`image-block ${className}`}>
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 80vw" priority={priority} />
    </div>
  );
}
