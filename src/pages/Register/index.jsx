import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import arrowImg from "../../assets/arrow.svg";
import logoImg from "../../assets/logo.svg";
import { auth } from "../../services/firebaseConfig";
import { FaUser, FaLock } from "react-icons/fa";
import "./styles.css";



export function Register() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");

  const [cadastrarUsuario, usuario, loading, error] = useCreateUserWithEmailAndPassword(auth);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setMensagemErro(""); // Limpar mensagem de erro anterior

    // ... (verificações antes do cadastro)
 
    // Tentar criar um novo usuário
    try {
      const user = await cadastrarUsuario(email, password);
      if (!user) {
        setMensagemErro("Falha ao cadastrar o usuário. Por favor, tente novamente.");
        return;
      }
      // O usuário foi cadastrado com sucesso
      // Redirecionar para a página desejada após o cadastro bem-sucedido
      return navigate("/paginadesejada");
    } catch (error) {
   
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }


  // Estilos para o componente
  const styles = {
    container: {
      backgroundColor: "#3d4d5f",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    card: {
      backgroundColor: "#3d4d5f",
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
      color: "#79ceee",
    },
    input: {
      backgroundColor: "#3d4d5f",
      borderColor: "transparent",
      borderBottomColor: "#ccc",
      borderBottomWidth: "2px",
      borderBottomStyle: "solid",
      color: "#000000",
      borderRadius: "0",
      padding: "12px",
      width: "100%",
      marginBottom: "12px",
    },
    botao: {
      backgroundColor: "#79ceee",
      color: "#ffffff",
      borderRadius: "4px",
      padding: "12px 16px",
      width: "100%",
      cursor: "pointer",
      fontSize: "16px",
    },
    link: {
      color: "#79ceee",
      textDecoration: "none",
    },
    rodape: {
      color: "#666",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h5 style={{ color: "#79ceee" }}>Crie sua conta</h5>
        <form style={styles.form}>
          {mensagemErro && <p style={{ color: "red" }}>{mensagemErro}</p>}
          <div className="mb-3" style={{ display: "flex", alignItems: "center" }}>
            <FaUser size={20} color="#79ceee" style={{ marginRight: "8px" }} />
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
            <FaLock size={20} color="#79ceee" style={{ marginRight: "8px" }} />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Senha"
              style={styles.input}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="btn btn-primary" style={styles.botao} onClick={handleSignUp}>
            Cadastrar <img src={arrowImg} alt="->" className="ms-2" />
          </button>
          <div style={styles.rodape}>
            <p>Você já tem uma conta?</p>
            <Link to="/" style={styles.link}>
              Acesse sua conta aqui
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}