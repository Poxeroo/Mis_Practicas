export default function Recuperar(){
    return(
            <section className=" flex flex-row h-screen">
                <div className="bg-blue-900 w-1/2 h-full ">
                </div>

                <div className=" h-full bg-white w-1/2 flex justify-center items-center">

                    <div className="h-fit w-3/4 shadow-xl shadow-slate-700 rounded-2xl p-10 lg:p-20 ">

                        <h1 className="text-blue-900 text-2xl font-extrabold text-center pb-10 lg:text-5xl">
                            Cambiar Contraseña
                        </h1>

                        
                            <input type="password" className="w-full h-10 rounded-xl bg-slate-100 px-5 mb-5" placeholder="Escribe tu contraseña"/>
                            <input type="password" className="w-full h-10 rounded-xl bg-slate-100 px-5" placeholder="Repite tu contraseña"/>
                        
                        
                        <button className="w-full h-10 rounded-xl bg-blue-900 text-center text-2xl font-semibold mt-10">
                            Cambiar
                        </button>

                    </div>

                </div>

            </section>
    );
}