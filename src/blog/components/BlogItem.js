import React, { useContext, useState } from "react";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import "./BlogItem.css";
import {AuthContext } from "../../shared/context"

const BlogItem = (props) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);


  const auth = useContext(AuthContext)

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler = () => {
    setShowConfirmModal(false);
    console.log("deleting...");
  };

  return (
    <React.Fragment>
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="are you sure?"
        footerClass="place-item__modal-actions"
        footer={
          <React.Fragment>
            <Button inverse onClick={cancelDeleteHandler}>
              {" "}
              cancel{" "}
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              {" "}
              delete{" "}
            </Button>
          </React.Fragment>
        }
      >
        <p>
          {" "}
          do you want to proceed and delete this place? please not that it cant
          be undone there after
        </p>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div>
            <div className="place-item__image">
              <img src={props.imge} alt={props.blog} />
            </div>
            <div>{props.blgentry}</div>
          </div>
          <Button to={`/blog/${props.id}`}>edit</Button>
          <Button danger onClick={showDeleteWarningHandler}>
            delete
          </Button>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default BlogItem;
