

export default function CorreoRecuperacion(){
    return(
        <section className=" bg-blue-900 h-screen w-screen flex justify-center items-center">

            <div className="w-1/2 h-1/2 bg-white/20 rounded-2xl flex flex-col items-center text-center p-10 md:p-20 justify-between">
                <h1 className="text-white md:text-5xl text-xl font-extrabold text-center ">
                    Recuperar Contraseña?
                </h1>

                <input className=" h-10 w-4/5 rounded-2xl px-5 bg-transparent border-2 border-white outline-2 outline-white" placeholder="Escribe tu correo electronico"/>

                <a href="./recuperar" className="w-fit h-10 px-10 rounded-xl bg-white text-center text-lg md:text-2xl font-semibold text-blue-900">
                    Enviar
                </a>

            </div>
            
        </section>
    );
}