import React from "react";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";

import "./BlogItem.css";

const BlogItem = (props) => {
  return (
    <li className="place-item">
      <Card className="place-item__content">
        <div>
          <div className="place-item__image">
            <img src={props.imge} alt={props.blog} />
          </div>
          <div>{props.blog}</div>
        </div>
        <Button>edit</Button>
        <Button>delete</Button>
      </Card>
    </li>
  );
};

export default BlogItem;
