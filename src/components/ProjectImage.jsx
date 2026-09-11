import { ImageIcon } from "lucide-react";

export function ProjectImage({ media, compact = false }) {
  const style = { "--project-image-ratio": media.ratio || "16 / 9" };

  return (
    <figure className={"project-image" + (compact ? " project-image--compact" : "")} style={style}>
      {media.src ? (
        <img alt={media.alt} src={media.src} />
      ) : (
        <div className="project-image__placeholder" role="img" aria-label={media.placeholder}>
          <ImageIcon aria-hidden="true" size={compact ? 28 : 36} strokeWidth={1.25} />
          <span>{media.placeholder}</span>
          <small>Replace with: {media.targetPath}</small>
        </div>
      )}
    </figure>
  );
}
