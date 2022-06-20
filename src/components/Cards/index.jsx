import Trash from "../../assets/Trash.svg";
import api from "../../services/api";
import { Card } from "./styles";
import { toast } from "react-toastify";
import Edit from '../../assets/Edit.svg'
import EditCard from "../EditCard";
import { useState } from "react";

function Cards({ elem }) {
  const [modalIsOpenTwo, setModalIsOpenTwo] = useState(false);
  const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));

  function removeItem() {
    api
      .delete(`/users/techs/${elem.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.success("Tecnologia Removida");
      });
  }

  function openModal () {
    setModalIsOpenTwo(true)
  }

  return (
    <Card>
      <h3>{elem.title}</h3>
      <div className="CardsInfos">
        <span>{elem.status}</span>
        <img src={Edit} alt="Editar" onClick={openModal}/>
        <EditCard
          modalIsOpenTwo={modalIsOpenTwo}
          setModalIsOpenTwo={setModalIsOpenTwo}
          elem={elem}
        />
        <img src={Trash} alt="Remover" onClick={removeItem} />
      </div>
    </Card>
  );
}

export default Cards;
