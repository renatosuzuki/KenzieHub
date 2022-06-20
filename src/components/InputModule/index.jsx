import { Container } from "./styles";

function InputModule({ label, register, name, error, ...rest }) {
  return (
    <Container isErrored={!!error}>
      <span>
        {label} {!!error && <span> - {error}</span>}
      </span>
      <select {...register(name)} {...rest}>
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Primeiro Módulo
        </option>
        <option value="Segundo módulo (Frontend Avançado)">
          Segundo Módulo
        </option>
        <option value="Terceiro módulo (Introdução ao Backend)">
          Terceiro Módulo
        </option>
        <option value="Quarto módulo (Backend Avançado)">Quarto Módulo</option>
      </select>
    </Container>
  );
}

export default InputModule;
