import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import arrowImg from "../../assets/arrow.svg";
import logoImg from "../../assets/logo.svg";
import { auth } from "../../services/firebaseConfig";
import { FaUser, FaLock } from "react-icons/fa";
import "./styles.css";
 
export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");

  const [backgroundColor, setBackgroundColor] = useState("#213a5c"); // Cor do fundo da tela
  const [buttonColor, setButtonColor] = useState("red"); // Cor do botão
  const [titulo, setTitulo] = useState("#79ceee"); // Cor do botão
  const [textColor, setTextColor] = useState("#79ceee");
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();

  function handleSignIn(e) {
    e.preventDefault(); 
    setMensagemErro(""); // Limpar mensagem de erro anterior

    signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      
        // Após o login bem-sucedido, navegue para a página desejada
        navigate("/paginadesejada"); // Substitua "/pagina-desejada" pela rota da página para onde deseja redirecionar
      })
      .catch((error) => {
        // Lidar com erros, exibindo a mensagem de erro
       
        setMensagemErro("Usuário ou senha incorretos. Por favor, tente novamente.");
      });
  }

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (user) {
    return console.log(user);
  }

  // Estilos para o componente
  const styles = {
    container: {
      backgroundColor: backgroundColor,
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    card: {
      backgroundColor: backgroundColor,
      border: "none",
      padding: "24px",
      width: "400px",
      maxWidth: "100%",
    },
    logo: {
      width: "100%",
      marginBottom: "24px",
    },
    form: {
      marginBottom: "24px",
    },
    label: {
      color: textColor,
    },
    input: {
      backgroundColor: backgroundColor,
      borderColor: "transparent",
      borderBottomColor: "#ccc",
      borderBottomWidth: "2px",
      borderBottomStyle: "solid",
      color: textColor,
      borderRadius: "0",
      padding: "12px",
      width: "100%",
      marginBottom: "12px",
    },
    button: {
      backgroundColor: titulo,
      color: "#ffffff",
      borderRadius: "4px",
      padding: "12px 16px",
      width: "100%",
      cursor: "pointer",
      fontSize: "16px",
    },
    link: {
      color: textColor,
      textDecoration: "none",
    },
    footer: {
      color: "#666",
      textAlign: "center",
    },
    errorMessage: {
      color: "red",
      marginBottom: "12px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h5 style={{ color: titulo }}>Bem-vindo</h5>
        <form style={styles.form}>
          {mensagemErro && <p style={styles.errorMessage}>{mensagemErro}</p>}
          <div className="mb-3" style={{ display: "flex", alignItems: "center" }}>
            <FaUser size={20} color={textColor} style={{ marginRight: "8px" }} />
            <input
              type="text"
              name="email"
              id="email"
              placeholder="E-mail"
              style={styles.input}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3" style={{ display: "flex", alignItems: "center" }}>
            <FaLock size={20} color={textColor} style={{ marginRight: "8px" }} />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Senha"
              style={styles.input}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="btn btn-primary" style={styles.button} onClick={handleSignIn}>
            Entrar <img src={arrowImg} alt="->" className="ms-2" />
          </button>
          <div style={styles.footer}>
            <p>Você não tem uma conta?</p>
            <Link to="/register" style={styles.link}>
              Crie a sua conta aqui
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
