import React, {
    useEffect,
    useState
} from 'react';

const HamburguerMenu = () => {
    const [isItemsVisible, setIsItemsVisible] = useState(false);
    
    useEffect(() => {
        document.getElementById('hamburguer-menu-items').style.display = isItemsVisible ? 'flex' : 'none';
    },[isItemsVisible]);

    const onClickHandler = () => {
        setIsItemsVisible(!isItemsVisible);
    };

    return(
        <div className="hamburguer-menu">
            <button
                className="hamburguer-menu__button"
                onClick={onClickHandler}
            >
                <svg 
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M15.5391 2.25781C15.5742 2.25781 15.6094 2.25781 15.6797 2.1875C15.7148 2.15234 15.75 2.11719 15.75 2.04688V1.20312C15.75 1.16797 15.7148 1.13281 15.6797 1.0625C15.6094 1.02734 15.5742 0.992188 15.5391 0.992188H0.210938C0.140625 0.992188 0.105469 1.02734 0.0703125 1.0625C0 1.13281 0 1.16797 0 1.20312V2.04688C0 2.11719 0 2.15234 0.0703125 2.1875C0.105469 2.25781 0.140625 2.25781 0.210938 2.25781H15.5391ZM15.5391 7.88281C15.5742 7.88281 15.6094 7.88281 15.6797 7.8125C15.7148 7.77734 15.75 7.74219 15.75 7.67188V6.82812C15.75 6.79297 15.7148 6.75781 15.6797 6.6875C15.6094 6.65234 15.5742 6.61719 15.5391 6.61719H0.210938C0.140625 6.61719 0.105469 6.65234 0.0703125 6.6875C0 6.75781 0 6.79297 0 6.82812V7.67188C0 7.74219 0 7.77734 0.0703125 7.8125C0.105469 7.88281 0.140625 7.88281 0.210938 7.88281H15.5391ZM15.5391 13.5078C15.5742 13.5078 15.6094 13.5078 15.6797 13.4375C15.7148 13.4023 15.75 13.3672 15.75 13.2969V12.4531C15.75 12.418 15.7148 12.3828 15.6797 12.3125C15.6094 12.2773 15.5742 12.2422 15.5391 12.2422H0.210938C0.140625 12.2422 0.105469 12.2773 0.0703125 12.3125C0 12.3828 0 12.418 0 12.4531V13.2969C0 13.3672 0 13.4023 0.0703125 13.4375C0.105469 13.5078 0.140625 13.5078 0.210938 13.5078H15.5391Z"
                        fill="#666666"
                    />
                </svg>
            </button>
            <ul
                id="hamburguer-menu-items" 
                className="hamburguer-menu__items"
            >
            </ul>
        </div>
    );
};

export default HamburguerMenu;