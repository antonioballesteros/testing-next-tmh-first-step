import Image from "next/image";

export default function Card({
  title,
  description,
  img,
}: {
  title: string;
  description: string;
  img: string;
}) {
  return (
    <article className="bg-slate-400 rounded-md p-4">
      <div className="flex">
        <Image
          src={img}
          width={300}
          height={300}
          alt={title}
          className="rounded-md"
        />
        <div className="flex flex-col ml-4">
          <h2 className="text-3xl">{title}</h2>
          <h3>{description}</h3>
        </div>
      </div>
    </article>
  );
}
