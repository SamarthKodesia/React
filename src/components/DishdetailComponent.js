import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderComments({ comments }) {
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
    return (
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
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <RenderComments comments={props.comments} />
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