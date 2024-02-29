import Image from "next/image";

interface tecnologiasPropsBox {
  data: {
    id: number;
    title: string;
    urlGithub: string;
    urlDemo: string;
    image: string;
  };
}

const TecnologiasBox = (props: tecnologiasPropsBox) => {
  const { data } = props;

  const { id, title, urlDemo, urlGithub, image } = data;

  return (
    <div className="p-4 border border-teal-50 rounded-xl">
      <h3 className="mb-4 text-xl">{title}</h3>
      <Image
        src={image}
        alt="Image product"
        width={200}
        height={200}
        className="w-full md:w-[200px] rounded-2xl h-auto"
      />
    </div>
  );
};

export default TecnologiasBox;
