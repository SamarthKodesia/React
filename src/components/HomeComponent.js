import React from 'react';
import { Loading } from './LoadingComponent';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import { baseUrl } from './shared/baseUrl';
import { FadeTransform } from 'react-animation-components';


function RenderCard({ item, isLoading, errMess }) {
    console.log("Value of the material: "+JSON.stringify(item));
    if (isLoading) {
        return (
            <Loading />
        );
    }
    else if (errMess) {
        console.log("Caught Error" + errMess);
        return (
            <h4>{errMess}</h4>
        );
    }
    else
        console.log("Leader name "+baseUrl + item.image);
        return (
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
            <Card>
                <CardImg src={baseUrl + item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
            </FadeTransform >
        );

}

function Home(props) {
    console.log("In home component: " + props.dishesErrMess);
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMsg} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} isLoading={props.promosLoading} errMess={props.promosErrMsg} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} isLoading={props.leadersLoading} errMess={props.LeadersErrMsg}  />
                </div>
            </div>
        </div>
    );
}

export default Home;