const Categories = () => {
  return (
    <div className=" m-6">
      <p className="font-bold"> Categorias principales</p>
      <div className="flex gap-2 text-white  overflow-scroll">
        <div className="grid bg-[#fa0711] min-w-40 col-span-1 items-center justify-center p-5  rounded-lg">
          <p className="font-bold"> Terror</p>
          <p>+5 peliculas</p>
        </div>
        <div className="grid bg-[#ff4500] min-w-40 col-span-1 items-center justify-center p-5 rounded-lg ">
          <p className="font-bold"> Comedia </p>
          <p>+5 peliculas</p>
        </div>
        <div className="grid bg-[#ff9b06]  min-w-40 col-span-1 items-center justify-center p-5 rounded-lg">
          <p className="font-bold"> Drama</p>
          <p>+5 peliculas</p>
        </div>
        <div className="grid bg-red-500   min-w-40 col-span-1 items-center justify-center p-5 rounded-lg">
          <p className="font-bold"> Accion</p>
          <p>+5 peliculas</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
