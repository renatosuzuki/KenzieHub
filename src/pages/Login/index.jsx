import { Container, Content, ContentHeader, ContentMain } from "./styles";
import Logo from "../../assets/Logo_Login.png";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import { Redirect, useHistory } from "react-router-dom";
import InputPassword from "../../components/InputPassword";

function Login({ authenticated, setAuthenticated }) {
  const formSchema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo Obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 digitos")
      .required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const history = useHistory();

  function onSubmit(data) {
    api
      .post("/sessions", data)
      .then((res) => {
        const user_id = res.data.user.id
        const token = res.data.token;
        localStorage.setItem("@KenzieHub:token", JSON.stringify(token));
        localStorage.setItem("@KenzieHub:user_id", JSON.stringify(user_id))

        toast.success("Login realizado com sucesso!");
        toast.info("Aguarde! Vamos te redirecionar.");

        setTimeout(function () {
          setAuthenticated(true);
          return history.push("/dashboard");
        }, 3000);
      })
      .catch((_) => {
        toast.error("Ops! Algo deu errado, verifique seus dados");
      });
  }

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  function buttonGo() {
    return history.push("/register");
  }

  return (
    <Container>
      <Content>
        <ContentHeader>
          <img src={Logo} alt="KenzieHub" />
        </ContentHeader>

        <ContentMain>
          <div className="ContentMainHeader">
            <h1>Login</h1>
          </div>
          <form className="ContentMainForm" onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Email"
              placeholder="Digite aqui seu email"
              register={register}
              name="email"
              error={errors.email?.message}
            />
            <InputPassword
              label="Senha"
              placeholder="Digite aqui sua senha"
              type="password"
              register={register}
              name="password"
              error={errors.password?.message}
            />
            <button type="submit">Entrar</button>
          </form>
          <div className="ContentMainFooter">
            <span>Ainda não possui uma conta?</span>
            <button onClick={buttonGo}>Cadastre-se</button>
          </div>
        </ContentMain>
      </Content>
    </Container>
  );
}

export default Login;
