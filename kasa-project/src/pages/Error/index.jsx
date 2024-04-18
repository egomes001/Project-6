import error404 from "../../assets/images/404.png";
import {Link} from 'react-router-dom';
import '../../styles/Error.scss';

function Error() {
    return (
      <div className="error">
        <img src={error404} alt="Erreur 404" className="error__img"/>
        <p className="error__text">Oups! La page demandée n'existe pas.</p>
        <Link to="/Home" className="error__link">Retourner sur la page d'accueil</Link>
      </div>
    )
  }
  
export default Error;