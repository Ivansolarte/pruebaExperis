import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router";
import { Create } from "../component/create/create";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const add = () => {
    setShowModal(true);
  };
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <div className="flex bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
        <div className="flex  relative w-screen">
          <div
            id="menu"
            className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 fixed left-0 h-screen overflow-y-scroll"
          >
            <div id="logo" className="my-4 px-6">
              <h1 className="text-lg md:text-2xl font-bold text-white">
                Prueba<span className="text-blue-500 ml-1">Experis</span>.
              </h1>
              <p className="text-slate-500 text-sm">
              Prueba de Desarrollador Frontend
              </p>
            </div>

            <div id="nav" className="w-full px-6">
              <NavLink
                to="/listado"
                className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 bg-blue-800 hover:bg-white/5 transition ease-linear duration-150"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold leading-5 text-white">
                    Lista
                  </span>
                  <span className="text-sm text-white/50 hidden md:block">
                    Data Overview
                  </span>
                </div>
              </NavLink>
            </div>
            <div id="nav" className="w-full px-6">
              <NavLink
                onClick={add}
                className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 bg-blue-800 hover:bg-white/5 transition ease-linear duration-150"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold leading-5 text-white">
                    Crear recurso
                  </span>
                  <span className="text-sm text-white/50 hidden md:block">
                    Data Overview
                  </span>
                </div>
              </NavLink>
            </div>
          </div>
          <div className="text-black w-full flex  relative ml-64">
            {showModal && <Create setShowModal={setShowModal} />}
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
