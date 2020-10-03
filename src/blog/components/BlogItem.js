import React from "react";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";

const BlogItem = (props) => {
  return (
    <li>
      <Card>
        <div>
          <div>
            <img src={props.img} alt={props.title} />
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
