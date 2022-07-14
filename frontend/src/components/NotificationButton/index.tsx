import notificationImg from "../../assets/img/notificaiton-icon.svg"
import "./styles.css"

export function NotificationButton() {
  return (
    <div className="dsmeta-red-btn">
      <img src={notificationImg} alt="Notificar" />
    </div>
  )
}