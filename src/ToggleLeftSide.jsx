import './styles.css';

export default function ToggleLeftSide({ onClick, isOpen }) {
    return (
        <button type="button" onClick={onClick} className="toggleLeftSide">
            {isOpen ? 'Close' : 'Open'}
        </button>
    );

}