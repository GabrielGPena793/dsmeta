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
          <a target="_blank" href="https://www.instagram.com/gabrielgpena"> @gabrielgpena</a>
        </p>
      </div>
    </header>
  )
}
