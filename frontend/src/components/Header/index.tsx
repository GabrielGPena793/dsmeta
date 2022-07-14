import "./styles.css"
import logoImg from "../../assets/img/logo.svg"


export function Header() {
  return (
    <header className="container__header_home">
      <div className="dsmeta-logo-container">
        <img src={logoImg} alt="DSMeta" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por
          <a href="https://www.instagram.com/devsuperior.ig"> @gabrielgpena</a>
        </p>
      </div>
    </header>
  )
}
