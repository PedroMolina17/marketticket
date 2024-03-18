import { useForm } from "react-hook-form";
import { FaUser, FaKey } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      nombre: "",
      correo: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    // reset({
    //   nombre: '',
    //   correo: '',
    //   fechaNacimiento: '',
    //   password: '',
    //   confirmarPassword: '',
    //   pais: 'ar',
    //   archivo: '',
    //   aceptaTerminos: false
    // })
    reset();
  });

  return (
    <div className="bg-red-200">
      <form
        className="flex flex-col justify-center items-center h-screen gap-2"
        onSubmit={onSubmit}
      >
        <label className="flex flex-col  items-center w-96 gap-1">
          Nombre de Usuario
          <div className="flex border rounded-md bg-white h-8 items-center gap-2 px-2">
            <FaUser />
            <input
              name="nombre"
              placeholder="Usuario"
              type="text"
              className=" bg-transparent focus:outline-none "
              {...register("nombre", {
                required: {
                  value: true,
                  message: "Nombre es requerido",
                },
                maxLength: 20,
                minLength: 2,
              })}
            />
          </div>
          {errors.nombre && (
            <span className="text-xs  font-bold">{errors.nombre.message}</span>
          )}
        </label>
        <label className="flex flex-col w-96 items-center gap-1">
          Correo
          <div className="flex border rounded-md bg-white h-8 items-center gap-2 px-2">
            <MdEmail />
            <input
              name="correo"
              placeholder="example@gmail.com"
              type="email"
              className=" bg-transparent focus:outline-none "
              {...register("correo", {
                required: {
                  value: true,
                  message: "Correo es requerido",
                },
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Correo no válido",
                },
              })}
            />
          </div>
          {errors.correo && (
            <span className="text-xs font-bold">{errors.correo.message}</span>
          )}
        </label>
        <label className="flex flex-col w-96 items-center gap-1">
          Contraseña
          <div className="flex border rounded-md bg-white h-8 items-center gap-2 px-2">
            <FaKey />
            <input
              name="password"
              placeholder="password"
              type="password"
              className=" bg-transparent focus:outline-none "
              {...register("password", {
                required: {
                  value: true,
                  message: "Contraseña es requerida",
                },
                minLength: {
                  value: 6,
                  message: "Contraseña debe ser mayor a 6 caracteres",
                },
              })}
            />
          </div>
          {errors.password && (
            <span className="text-xs font-bold">{errors.password.message}</span>
          )}
        </label>
        <button className="p-2 bg-red-500 rounded-md" type="submit">
          Registrar
        </button>
      </form>
    </div>
  );
};

export default Signup;
