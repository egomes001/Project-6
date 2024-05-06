import error404 from "../../assets/images/404.png";
import {Link} from 'react-router-dom';
import '../../styles/Error.scss';

function Error() {
    return (
      <main className="error">
        <img src={error404} alt="Erreur 404" className="error__img"/>
        <p className="error__text">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/Home" className="error__link">Retourner sur la page d'accueil</Link>
      </main>
    )
  }
  
export default Error;