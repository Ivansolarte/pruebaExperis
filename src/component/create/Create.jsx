import { useState } from "react";
import { Modal } from "../../elements/modal/Modal";
import { Input } from "../../elements/input/Input";
import { Button } from "../../elements/button/Button";
import { addResources } from "../../service/service";
import { Loading } from "../modals/Loading";

export const Create = ({ setShowModal }) => {

  const [form, setForm] = useState({
    title: "",
    body: "",
    userId: 1,
  });
  const [modalSuccess, setModalSuccess] = useState(false)

  const handlechange = (e) => {
    const { name, value } = e.target; // Extraemos 'name' y 'value' del evento
    setForm((prevForm) => ({
      ...prevForm, // Mantenemos los valores anteriores del estado
      [name]: value, // Actualizamos el valor del campo correspondiente
    }));
  };

  const create = () => {
    setModalSuccess(true)
    addResources(form).then((resp) => {
      setShowModal(false);
      setTimeout(() => {
        setModalSuccess(false)
      }, 5000);
      console.log(resp);
    });
  };

  return (
    <>
      <Modal>
        <div className="  py-6">
          <div className="text-center my-4">
            <h1 className="text-2xl font-bold">Crear un recurso</h1>
          </div>
          <div className="grid grid-cols-2 my-4">
            <div className="my-4 text-center">
              <p>Titulo</p>
            </div>
            <div className="my-4">
              <Input
                name="title"
                value={form.title}
                onChange={handlechange}
                placeholder={"Titulo"}
              />
            </div>
            <div className="my-4 text-center">
              <p>Cuerpo</p>
            </div>
            <div className="my-4">
              <Input
                name="body"
                value={form.body}
                onChange={(e) => handlechange(e)}
                placeholder={"Body"}
              />
            </div>
            <div className="my-4 text-center">
              <p>Usuario</p>
            </div>
            <div className="my-4">
              <Input
                value={form.userId}
                onChange={handlechange}
                placeholder={"user"}
                disabled={true}
              />
            </div>
          </div>
          <div className=" flex justify-center">
            <Button
              onclick={() => setShowModal(false)}
              text={"Cancelar"}
              type="edit"
            />
            <Button onclick={create} text={"Guardar"} />
          </div>
        </div>
      </Modal>
      {modalSuccess&&<Loading />}
    </>
  );
};
