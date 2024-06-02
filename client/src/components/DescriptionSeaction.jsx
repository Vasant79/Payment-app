/**
 remove this extra articel just pass data as props
 */
function DescriptionSeaction({ title, content }) {
  return (
    <div className="h-60 w-80 p-5 mt-5 md:mt-10 mb-10 flex flex-col border shadow-sm rounded-xl lg:mx-10 hover:ring hover:outline-none hover:ring-blue-300 hover:shadow-xl hover:shadow-blue-200 transition ease-in-out hover:translate-y-1">
      <h1 className="font-Lato text-2xl">{title}</h1>

      <article className="w-full  mt-5 text-3xl font-Lato  font-semibold text-pretty ">
        {content}
      </article>
    </div>
  );
}

export default DescriptionSeaction;
