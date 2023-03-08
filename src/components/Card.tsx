import { GithubLogo, PaperPlaneRight } from "@phosphor-icons/react";

interface CardProps {
  id: number;
  title: string;
  description: string;
  url: string;
  repoUrl: string;
}

export function Card(props: CardProps) {
  return (
    <div className="bg-zinc-600 text-white w-[25%] p-4 border rounded-lg flex flex-row justify-between gap-4">
      <div className="flex flex-col">
        <h1>
          {props.id} - {props.title}{" "}
        </h1>
        <p>{props.description}</p>
      </div>
      <div className="flex flex-col gap-4">
        <a
          className="flex bg-zinc-700 p-2 justify-between text-white border rounded-md hover:bg-zinc-300 hover:border-zinc-800 hover:text-zinc-800"
          href={props.repoUrl}
          target="_blank"
        >
          Repository
          <GithubLogo size={20} weight="bold" color="#FFDB58" />
        </a>
        <a
          className="flex bg-zinc-700 p-2 text-white border rounded-md hover:bg-zinc-300 hover:border-zinc-800 hover:text-zinc-800"
          href={props.url}
        >
          Page
          <PaperPlaneRight size={20} weight="bold" color="#FFDB58" />
        </a>
      </div>
    </div>
  );
}
