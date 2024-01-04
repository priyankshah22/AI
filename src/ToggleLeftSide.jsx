import './ToggleLeftSide.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


export default function ToggleLeftSide({ onClick, isOpen }) {
    return (
        <>
            <FontAwesomeIcon icon={faBars} className="toggleLeftSide" onClick={onClick} >
                {isOpen ? 'Close' : 'Open'}
            </FontAwesomeIcon>
        </>

    );

}

