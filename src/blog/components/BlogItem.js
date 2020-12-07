import React, { useContext, useState } from "react";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import "./BlogItem.css";
import {AuthContext } from "../../shared/context/auth-context"
import {useHttpClient} from "../../shared/hooks/http-hook"
import ErrorModal from "../../shared/components/UIElements/ErrorModal";

const BlogItem = (props) => {

  const {isLoading, error, sendRequest, clearError} = useHttpClient()
  const [showConfirmModal, setShowConfirmModal] = useState(false);


  const auth = useContext(AuthContext)

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler = async () => {
    setShowConfirmModal(false);
    try {
      await sendRequest(
        `http://localhost:5000/api/blog/${props.id}`,
        "DELETE"
      )
      props.onDelete(props.id)
    } catch (err) {
      
    }
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError}/>
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
              <img src={props.imgee} alt={props.blog} />
            </div>
            <div>{props.blgentryy}</div>
          </div>
          {auth.userId === props.creatorId && (
          <Button to={`/blog/${props.id}`}>edit</Button>
          )}
          {auth.userId === props.creatorId && (
          <Button danger onClick={showDeleteWarningHandler}>
            delete
          </Button>
          )}
        </Card>
      </li>
    </React.Fragment>
  );
};

export default BlogItem;
