import { useReducer } from "react";
import "./App.css";
import Login from "./components/icons/login";
import Password from "./components/icons/password";
import User from "./components/icons/user";
import NavBar from "./components/NavBar";

const cadastroReducer = (state, action) => {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.payload };
    case "setEmail":
      return { ...state, email: action.payload };
    case "setPassword":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

const cadastroInitialState = {
  name: "",
  password: "",
  email: "",
};

function App() {
  const [loginState, dispatch] = useReducer(
    cadastroReducer,
    cadastroInitialState
  );

  return (
    <div className="App">
      <NavBar />
      <div className="content p-28 flex justify-between">
        <div className="frase">
          <p
            className="text-white font-bold text-2xl"
            style={{ width: "20vw" }}
          >
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </p>
        </div>
        <div className="cadastro text-white flex flex-col">
          <div className="span flex flex-col gap-3 mb-4">
            <span className="text-3xl font-medium">Comece agora grátis</span>
            <span className="text-l font-medium">
              Crie sua conta e make the change._
            </span>
          </div>
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className={"flex flex-col gap-3 w-fit"}
          >
            <label htmlFor="name" className="label">
              <User />
              <input
                className="pl-5 bg-transparent border-b placeholder:text-white"
                type="text"
                name="name"
                id="name"
                placeholder="Nome Completo"
                value={loginState.name}
                onChange={(e) => {
                  dispatch({ type: "setName", payload: e.target.value });
                }}
              />
            </label>

            <label htmlFor="email" className="label">
              <Login />
              <input
                className="pl-5 bg-transparent border-b placeholder:text-white"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                autoComplete="off"
                value={loginState.email}
                onChange={(e) => {
                  dispatch({ type: "setEmail", payload: e.target.value });
                }}
              />
            </label>

            <label htmlFor="password" className="label">
              <Password />
              <input
                className="pl-5 bg-transparent border-b placeholder:text-white"
                type="password"
                name="password"
                id="password"
                placeholder="Senha"
                value={loginState.password}
                onChange={(e) => {
                  dispatch({ type: "setPassword", payload: e.target.value });
                }}
              />
            </label>

            <input
              type="submit"
              value="Criar minha conta"
              className="mt-4 bg-rose-600 rounded-xl outline outline-offset-4 outline-2 outline-rose-500 cursor-pointer hover:bg-rose-800"
            />
          </form>
          <div className="other w-72 mt-4">
            <p>
              Ao clicar em "criar minha conta grátis", declaro que aceito as
              Políticas de Privacidade e os Termos de Uso da DIO.
            </p>
            <span className="text-xs">
              Já tenho conta.{" "}
              <a href="https://youtu.be/dQw4w9WgXcQ" className="text-green-400">
                Fazer login
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
