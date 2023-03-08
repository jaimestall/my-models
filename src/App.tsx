import { NextSeo } from "next-seo";
import { Card } from "./components/Card";
import { projects } from "./utils/projects";

function App() {
  return (
    <>
      <NextSeo
        title="My personal projects"
        description="A few of my personal projects."
      />

      <div className="flex flex-col gap-6 p-6 justify-between items-center">
        {projects &&
          projects.map((project) => {
            return (
              <Card
                id={project.id}
                title={project.title}
                description={project.description}
                repoUrl={project.repoUrl}
                url={project.url}
              />
            );
          })}
      </div>
    </>
  );
}

export default App;
