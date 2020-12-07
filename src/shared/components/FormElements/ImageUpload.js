import React, {useRef} from 'react'

import Button from "./Button"

import './ImageUpload.css'

const ImageUpload = props => {

    const filePickerRef = useRef()

    const pickImageHandler = () => {}

    return (
        <div className="form-control">
            <input id={props.id} style={{display: "none"}} type="file" accept=".jpg,.png,.jpeg"/>
            <div className={`image-upload ${props.center && "center"}`}>
            <div className="image-upload__preview">
                <img src="" alt="preview"/>
            </div>
            <Button type="button" onClick={}> pick image</Button>
            </div>

        </div>
    )
}

export default ImageUpload