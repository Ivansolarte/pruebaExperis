import { useState, useEffect } from "react";
import { Tables } from "../elements/table/Tables";
import { getResources, deleteResources } from "../service/service";
import { Modal } from "../elements/modal/Modal";
import { Create } from "../component/create/create";

export const Lista = () => {
  const [title, setTitle] = useState([
    "Id uduario",
    "Body",
    "titulo",
    "accion",
  ]);
  const [data, setData] = useState([]);
  const [sohwModal, setSohwModal] = useState(false);

  const modalEliminar = (payload) => {
    console.log(payload);
    deleteResources(payload.id).then((resp) => {
      console.log(resp);
      getList()
    });
  };

  const getList = () => {
    getResources().then((resp) => {
      const mappedData = resp
        .filter((item) => item.userId === 1) // Filtramos por userId == 1
        .map((item, index) => [
          item.userId,
          item.title,
          item.body,
          <div key={index} className="flex justify-center items-center h-[99%]">
            {/* <button className=" border h-8 px-4 border-blue-600 rounded mr-2" onClick={modalEdit(item)}>
              editar{item.id}
            </button> */}
            <button
              className=" border h-8 px-4 border-red-600 rounded"
              onClick={() => modalEliminar(item)}
            >
              eliminar
            </button>
          </div>,
        ]);

      mappedData.push();

      setData(mappedData);
      console.log(mappedData);
    });
  };

  useEffect(() => {
    getList();
    return () => {};
  }, []);

  return (
    <>
      {sohwModal && <Create/> }
      <div className="m-7 container border border-slate-500">
        <div className="mt-8">
          <div className="flex justify-center ">
            <h1 className="text-3xl font-bold mb-3 ">lista de productos</h1>
          </div>
          <div className="flex justify-center mt-8 ">
            <hr className="  border w-3/4 border-slate-700 border-[1px]" />
          </div>
          <div className="flex justify-center">
            <Tables title={title} data={data} />
          </div>
        </div>
      </div>
    </>
  );
};
