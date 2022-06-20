import { Redirect, useHistory } from "react-router-dom";
import {
  CardsContainer,
  CardsContent,
  Container,
  Content,
  Header,
  Infos,
  MainContent,
} from "./styles";
import Logo from "../../assets/Logo_Dashboard.png";
import Plus from "../../assets/Plus.svg";
import Cards from "../../components/Cards";
import { useEffect, useState } from "react";
import CreateCard from "../../components/CreateCard";
import api from "../../services/api";

function Dashboard({ authenticated, setAuthenticated }) {
  const [userTechs, setUserTechs] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [userInfos, setUserInfos] = useState([]);
  const user_id = JSON.parse(localStorage.getItem("@KenzieHub:user_id"));
  const history = useHistory();

  function getInfos() {
    api.get(`users/${user_id}`).then((res) => {
      setUserInfos(res.data);
      setUserTechs(res.data.techs);
    });
  }

  useEffect(() => {
    getInfos();
  });

  function exit() {
    setAuthenticated(false);
    localStorage.clear();
    return history.push("/");
  }

  if (!authenticated) {
    return <Redirect to="/" />;
  }

  function openModal() {
    setModalIsOpen(true);
  }

  return (
    <Container>
      <Content>
        <Header>
          <img src={Logo} alt="KenzieHub" />
          <button onClick={exit}>Sair</button>
        </Header>
        <Infos>
          <h1>Olá, {userInfos.name}</h1>
          <span>{userInfos.course_module}</span>
        </Infos>
        <MainContent>
          <div className="MainInfos">
            <h2>Tecnologias</h2>
            <button onClick={openModal}>
              <img src={Plus} alt="+" />
            </button>
            <CreateCard
              modalIsOpen={modalIsOpen}
              setModalIsOpen={setModalIsOpen}
            />
          </div>
          <CardsContainer>
            <CardsContent>
              {userTechs.map((elem) => (
                <Cards
                  elem={elem}
                  key={elem.id}
                />
              ))}
            </CardsContent>
          </CardsContainer>
        </MainContent>
      </Content>
    </Container>
  );
}

export default Dashboard;
