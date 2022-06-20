import { Container, Content, ContentHeader, ContentMain } from "./styles";
import Logo from "../../assets/Logo_Register.png";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputModule from "../../components/InputModule";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useHistory, Redirect } from "react-router-dom";
import InputPasswordWithOutBorder from "../../components/InputPasswordWithOutBorder";

function Register({ authenticated }) {
  const formSchema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    email: yup.string().email("Email inválido").required("Campo Obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 digitos")
      .required("Campo Obrigatório"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo Obrigatório"),
    bio: yup.string().required("Campo Obrigatório"),
    contact: yup.string().required("Campo Obrigatório"),
    course_module: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const history = useHistory();

  function onSubmit({ name, email, password, bio, contact, course_module }) {
    const userInfos = { name, email, password, bio, contact, course_module };

    api
      .post("/users", userInfos)
      .then((_) => {
        toast.success("Conta criada com sucesso!");
        toast.info("Aguarde! Vamos te redirecionar.");
        setTimeout(function () {
          return history.push("/");
        }, 3000);
      })
      .catch((_) => {
        toast.error("Este email já foi cadastrado.");
      });
  }

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  function buttonReturn() {
    return history.push("/");
  }

  return (
    <Container>
      <Content>
        <ContentHeader>
          <img src={Logo} alt="KenzieHub" />
          <button onClick={buttonReturn}>Voltar</button>
        </ContentHeader>

        <ContentMain>
          <div className="ContentMainHeader">
            <h1>Crie sua conta</h1>
            <span>Rapido e grátis, vamos nessa:</span>
          </div>
          <form className="ContentMainForm" onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Nome"
              placeholder="Digite aqui seu nome"
              register={register}
              name="name"
              error={errors.name?.message}
            />
            <Input
              label="Email"
              placeholder="Digite aqui seu email"
              register={register}
              name="email"
              error={errors.email?.message}
            />
            <InputPasswordWithOutBorder
              label="Senha"
              placeholder="Digite aqui sua senha"
              type="password"
              register={register}
              name="password"
              error={errors.password?.message}
            />
            <InputPasswordWithOutBorder
              label="Confirmar Senha"
              placeholder="Digite novamente sua senha"
              type="password"
              register={register}
              name="passwordConfirm"
              error={errors.passwordConfirm?.message}
            />
            <Input
              label="Bio"
              placeholder="Fale sobre você"
              register={register}
              name="bio"
              error={errors.bio?.message}
            />
            <Input
              label="Contato"
              placeholder="Opção de contato"
              register={register}
              name="contact"
              error={errors.contact?.message}
            />
            <InputModule
              label="Selecionar Módulo"
              placeholder="Selecione seu Módulo"
              register={register}
              name="course_module"
              error={errors.course_module?.message}
            />
            <button type="submit">Cadastrar</button>
          </form>
        </ContentMain>
      </Content>
    </Container>
  );
}

export default Register;
