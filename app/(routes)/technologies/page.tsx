import AvatarTecnologias from "@/components/avatar-tecnologias";
import CircleImage from "@/components/circle-image";
import ContainerPage from "@/components/container";
import TecnologiasBox from "@/components/tecnologias-box";
import TransitionPage from "@/components/transition-page";
import { dataAboutPage, dataPortfolio } from "@/data";

const Tecnologias = () => {
  return (
    <ContainerPage>
      <TransitionPage />
      <AvatarTecnologias />
      <CircleImage />
      <div className=" flex flex-col justify-center h-full">
        <h1 className=" text-2xl leading-tight text-center md:text-4xl md:mb-5 ">
          Lenguajes y{" "}
          <span className="text-secondary font-bold">Tecnologias</span>
        </h1>
        <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-5">
          {dataPortfolio.map((data) => (
            <TecnologiasBox key={data.id} data={data} />
          ))}
        </div>
      </div>
    </ContainerPage>
  );
};

export default Tecnologias;
