require("bootstrap/dist/css/bootstrap.css");
require("./user-details.css");
import React from "react";
import {render} from "react-dom";


export class UserDetails extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {user} = this.props;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
                        <div className="well profile">
                            <div className="col-sm-12">
                                <div className="col-xs-12 col-sm-8">
                                    <h2>{user.name}</h2>
                                    <p><strong>About: </strong>{user.prof}</p>
                                    <p><strong>Hobbies: </strong>
                                        {user.hobbies.join(', ')}
                                    </p>
                                    <p><strong>Skills: </strong>
                                        {user.skills.map((skill, index) => {
                                            return <span key={index}
                                                         style={{marginRight: '5px'}}
                                                         className="tags">{skill}</span>
                                        })}
                                    </p>
                                </div>
                                <div className="col-xs-12 col-sm-4 text-center">
                                    <figure>
                                        <img src="http://via.placeholder.com/250x250"
                                             alt="" className="img-circle img-responsive"/>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}