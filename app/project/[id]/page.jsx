import Futurest from "../../Component/ProjectsComp/Futurest";
import SkyPtoP from "../../Component/ProjectsComp/SkyPtoP";
import SoloByTaqsim from "../../Component/ProjectsComp/SoloByTaqsim";
import UpComming from "../../Component/ProjectsComp/UpComming";

const components = {
  Futurest: Futurest,
  SkyPtoP: SkyPtoP,
  SoloByTaqsim: SoloByTaqsim,
  UpComming: UpComming,
};

export default async function ProjectPage({ params }) {
  const { id } = await params;
  const Component = components[id];

  if (!Component) {
    return <div>Project not found</div>;
  }

  return <Component />;
}