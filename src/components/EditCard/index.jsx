import "./styles.css";
// import Modal from "react-modal";
import Modal from "react-modal";
import X from "../../assets/X.svg";
import api from "../../services/api";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

Modal.setAppElement("#root");

function EditCard({ modalIsOpenTwo, setModalIsOpenTwo, elem }) {
  const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));

  const formSchema = yup.object().shape({
    status: yup.string(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });
  function closeModal() {
    setModalIsOpenTwo(false);
  }
  function onSubmit({ status }) {
    const techInfos = { status };

    api
      .put(`/users/techs/${elem.id}`, techInfos, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.success("Tecnologia atualizada!");
      })
      .catch((_) => {
        toast.error("Ops! Algo deu errado.");
      });
  }
  return (
    <Modal
      isOpen={modalIsOpenTwo}
      onRequestClose={closeModal}
      overlayClassName="modal-overlay-edit"
      className="modal-content-edit"
    >
      <div className="modalEditCardContainer">
        <header>
          <h3>Atualizar Tecnologia</h3>
          <img src={X} alt="X" onClick={closeModal} />
        </header>
        <form className="EditCardContent" onSubmit={handleSubmit(onSubmit)}>
          <div className="EditCardInputContainer">
            <span>Selecionar Status</span>
            <select name="status" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </div>
          <button type="submit">Salvar Alteração</button>
        </form>
      </div>
    </Modal>
  );
}

export default EditCard;
