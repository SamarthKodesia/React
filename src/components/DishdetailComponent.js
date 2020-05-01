import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, List } from 'reactstrap';

function RenderComments({comments}) {
    console.log("Inside render:    " + JSON.stringify(comments));
    var com = comments.map((comment) => {
        console.log("Comment:    " + comment.comment);
        return (
            <div key={comment.id} className="List">
                <li>{comment.comment}
                </li>
                <br />
                <li>
                    -- {comment.author}&nbsp;{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                </li>
            </div>
        );
    });

    return (
        <div>
            <ul className="list-unstyled">{com}</ul>;
            </div>
    );
}

function RenderDish({ dish }) {
    return(
    <div className="col-12 col-md-5 m-1">
        <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card >
    </div>
    );
}



const DishDetail = (props) => {
    console.log("Value passed" + props.dish)
    if (props.dish != null) {
        console.log("In dish details not null");
        return (
            <div className="container">
                <div className="row">
                    <RenderDish dish={props.dish}/>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <RenderComments comments={props.dish.comments} />
                    </div>
                </div>
            </div>
        );
    }
    else
        return (
            <div></div>
        );

}

export default DishDetail;