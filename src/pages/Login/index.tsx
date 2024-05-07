import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Container, LoginContainer, Column, Spacing, Title } from "./styles";
import { defaultValues, IFormLogin } from "./types";

const schema = yup
  .object({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "No minimo 6 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

const Login = () => {
  const {
    control,
    formState: { errors, isValid },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues,
    reValidateMode: "onChange"
  });
  return (
    <Container>
      <LoginContainer>
        <Column>
          <Title>Login</Title>
          <Spacing />
          <Input
            name="email"
            placeholder="Email"
            control={control}
            errorMessage={errors?.email?.message}
            />
          <Spacing />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            control={control}
            errorMessage={errors?.password?.message}
            />
          <Spacing />
          <Button title={isValid? "Entrar" : "Preencha os campos"} disabled={isValid}></Button>
          {/* isValid é uma variavel booleana, que altera seu valor comforme o estado dos erros no form
              disabled é uma condicao do proprio button no css, eu altero seu valor de acordo com o estado da variavel isValid, disabled aceita apenas boolean

              basicamente coloquei uma condicional de verifica se isValid está verdadero ou falso, assim alterando o texto no butão, bem como altera o estado de Dissables quando tiver algum erro no formulario
               */}
        </Column>
      </LoginContainer>
    </Container>
  );
};
export default Login;