import React, {useRef, useState} from 'react'

import Button from "./Button"

import './ImageUpload.css'

const ImageUpload = props => {

    const [file, setFile] = useState();
    const [previewUrl, setPreviewUrl] = useState();
    const [isValid, setIsValid] = useState(false)

    const filePickerRef = useRef()

    const pickedHandler = event => {
        let pickedfile
        let fileIsValid = isValid
        if(event.target.files || event.target.files.length === 1) {
            pickedfile = event.target.files[0];
            setFile(pickedfile);
            setIsValid(true)
            fileIsValid = true
        } else {
            setIsValid(false)
            fileIsValid = false
        }
        props.onInput(props.id, pickedfile, fileIsValid)
    }

    const pickImageHandler = () => {
        filePickerRef.current.click()
    }

    return (
        <div className="form-control">
            <input ref={filePickerRef} id={props.id} style={{display: "none"}} type="file" accept=".jpg,.png,.jpeg" onChange={pickedHandler}/>
            <div className={`image-upload ${props.center && "center"}`}>
            <div className="image-upload__preview">
                <img src="" alt="preview"/>
            </div>
            <Button type="button" onClick={pickImageHandler}> pick image</Button>
            </div>

        </div>
    )
}

export default ImageUpload