import React, {
    useEffect,
    useState
} from 'react';
import {Link} from 'react-router-dom';

//Components
import {
    CardContent,
    Loader
} from './index';

const CardList = (props) => {
    const [cardList,setCardList] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACK_END_HOST}/api/${props.cardListingType}s/offset/${props.cardMaxListing}`, {
            method: 'GET'
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            if(data.success){
                setCardList(data[`${props.cardListingType}s`]);
                setIsLoading(false);
            }
        })
    },[props.cardListingType,props.cardMaxListing]);

    if(isLoading){
        return(
            <Loader isLoading={true} />
        );  
    }else{
        return(
            cardList.map((element,index) => {
                return(
                    <Link
                        key={index}
                        className="card-course"
                        to={`/${props.cardListingType}s/post?id=${element[`${props.cardListingType}_id`]}&type=${props.cardListingType}`}
                    >
                        <CardContent
                            cardType={props.cardListingType}
                            card={element}
                        />
                    </Link>
                );
            })
        );
    }
};

export default CardList;