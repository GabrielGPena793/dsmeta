import axios from "axios";
import { toast } from "react-toastify";
import notificationImg from "../../assets/img/notificaiton-icon.svg";
import { BASE_URL } from "../../utils/request";
import "./styles.css";

interface NotificationButtonProps {
  saleId: number;
}

function handleSendNotification(saleId : number){
  axios.get(`${BASE_URL}/sales/${saleId}/notification`)
    .then(response => {
      toast.info("SMS enviado com sucesso")
    })
}

export function NotificationButton({ saleId } : NotificationButtonProps) {


  return (
    <div className="dsmeta-red-btn" onClick={() => handleSendNotification(saleId)}>
      <img src={notificationImg} alt="Notificar" />
    </div>
  )
};