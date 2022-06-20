import { Container, InputContainer } from "./styles";
import {FiEye, FiEyeOff} from 'react-icons/fi'
import { useState } from "react";

function InputPassword({ label, register, name, error, type, ...rest}) {

    const [isVisible, setIsVisible] = useState(false) 

    function togglePassword () {
        setIsVisible(!isVisible)
    }

  return (
    <Container isErrored={!!error}>
      <span>{label} {!!error && <span> - {error}</span>}</span>
        <InputContainer>
            <input type={isVisible ? "text" : "password"} {...register(name)} {...rest} />
            {isVisible ? <FiEye onClick={togglePassword}/> : <FiEyeOff onClick={togglePassword}/>}
        </InputContainer>
    </Container>
  );
}

export default InputPassword;