import Modal from "react-modal";
import X from "../../assets/X.svg";
import api from "../../services/api";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import "./styles.css";

Modal.setAppElement("#root");

function CreateCard({ modalIsOpen, setModalIsOpen }) {
  const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));

  const formSchema = yup.object().shape({
    title: yup.string().required("Campo Obrigatório"),
    status: yup.string(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });
  function closeModal() {
    setModalIsOpen(false);
  }

  function onSubmit({ title, status }) {
    const techInfos = { title, status };

    api
      .post("/users/techs", techInfos, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.success("Tecnologia adicionada!");
      })
      .catch((_) => {
        toast.error("Essa tecnologia já foi adicionada.");
      });
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <div className="modalContainer">
        <header>
          <h3>Cadastrar Tecnologia</h3>
          <img src={X} alt="X" onClick={closeModal} />
        </header>
        <form className="content" onSubmit={handleSubmit(onSubmit)}>
          <div className="inputContainer">
            <span>Nome</span>
            <input
              type="text"
              name="title"
              placeholder="Tecnologia"
              {...register("title")}
            />
          </div>
          <div className="inputContainer">
            <span>Selecionar Status</span>
            <select name="status" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </div>
          <button type="submit">Cadastrar Tecnologia</button>
        </form>
      </div>
    </Modal>
  );
}

export default CreateCard;
