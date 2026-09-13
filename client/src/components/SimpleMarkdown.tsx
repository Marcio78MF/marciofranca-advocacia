import { Fragment, ReactNode } from "react";

function inline(text: string): ReactNode[] {
  const pattern = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;
  return text
    .split(pattern)
    .filter(Boolean)
    .map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith("*") && part.endsWith("*")) {
        return <em key={index}>{part.slice(1, -1)}</em>;
      }
      const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (link) {
        const href =
          link[2].startsWith("/") || link[2].startsWith("https://")
            ? link[2]
            : "#";
        return (
          <a key={index} href={href}>
            {link[1]}
          </a>
        );
      }
      return <Fragment key={index}>{part}</Fragment>;
    });
}

export function SimpleMarkdown({ children }: { children: string }) {
  const lines = children.trim().split("\n");
  const blocks: ReactNode[] = [];

  for (let index = 0; index < lines.length; ) {
    const line = lines[index].trim();
    if (!line) {
      index += 1;
      continue;
    }

    const heading = line.match(/^(#{2,4})\s+(.+)$/);
    if (heading) {
      const Tag = `h${heading[1].length}` as "h2" | "h3" | "h4";
      blocks.push(<Tag key={index}>{inline(heading[2])}</Tag>);
      index += 1;
      continue;
    }

    if (/^-\s+/.test(line)) {
      const items: ReactNode[] = [];
      while (index < lines.length && /^-\s+/.test(lines[index].trim())) {
        items.push(
          <li key={index}>
            {inline(lines[index].trim().replace(/^-\s+/, ""))}
          </li>
        );
        index += 1;
      }
      blocks.push(<ul key={`ul-${index}`}>{items}</ul>);
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items: ReactNode[] = [];
      while (index < lines.length && /^\d+\.\s+/.test(lines[index].trim())) {
        items.push(
          <li key={index}>
            {inline(lines[index].trim().replace(/^\d+\.\s+/, ""))}
          </li>
        );
        index += 1;
      }
      blocks.push(<ol key={`ol-${index}`}>{items}</ol>);
      continue;
    }

    if (line.startsWith("> ")) {
      blocks.push(
        <blockquote key={index}>
          <p>{inline(line.slice(2))}</p>
        </blockquote>
      );
      index += 1;
      continue;
    }

    const paragraph = [line];
    index += 1;
    while (
      index < lines.length &&
      lines[index].trim() &&
      !/^(#{2,4})\s+|^-\s+|^\d+\.\s+|^>\s+/.test(lines[index].trim())
    ) {
      paragraph.push(lines[index].trim());
      index += 1;
    }
    blocks.push(<p key={`p-${index}`}>{inline(paragraph.join(" "))}</p>);
  }

  return <>{blocks}</>;
}
