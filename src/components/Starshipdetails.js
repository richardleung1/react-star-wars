import { Link } from 'react-router-dom';
import { useParams, useLocation, useHistory } from 'react-router';

function Starshipdetails({ data }) {
    const { id } = useParams();
    const details = data[parseInt(id)];
    const starshipDetails = Object.entries(details);

    if (!details) {
        return null;
    }
    return (
        <>
            <Link to={'/'}>Return</Link>
            <ul className="details">
                {starshipDetails.map(([key, value]) => (
                    <li className="details-li" key={key}>
                        <span className="key">{key}: </span>
                        <span className="value">{value}</span>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Starshipdetails;