
export default function login() {
    return (
        <section className=" w-screen h-screen bg-white">

            <div className="w-1/2 bg-blue-900 justify-start h-screen -z-0">

            <div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                <div className="bg-white rounded-2xl shadow-xl shadow-slate-800 flex flex-col gap-5 items-center justify-center p-10 md:p-20">
                    <h1 className="text-blue-900 text-xl md:text-5xl font-extrabold text-center">
                    Welcome Back
                    </h1>

                    <input type="text" className="w-full h-10 rounded-xl bg-slate-100 px-2" placeholder="Nombre De Usuario"/>
                    
                    <input type="password" className="w-full h-10 rounded-xl bg-slate-100 px-2" placeholder="Contraseña"/>

                    <div className="w-full flex flex-row justify-between">

                        <div className="flex flex-row">
                            <input type="checkbox" />
                            <h3 className="text-black mx-1">Recordar Contraseña</h3>
                        </div>

                        <a href="./correorecuperacion" className="text-blue-900 hover:underline">
                            Olvide mi contraseña
                        </a>
                    </div>

                    <button className="w-full h-10 rounded-xl bg-blue-900 text-center text-2xl font-semibold">
                        Enviar
                    </button>

                    <h2 className="text-black">
                        Aun no posees una cuenta?
                    <a href="#" className="text-blue-900 hover:underline ">
                        Registrate
                    </a>
                    </h2>
                </div>
            </div>
          </div>
            
        </section>
      
      );
  }