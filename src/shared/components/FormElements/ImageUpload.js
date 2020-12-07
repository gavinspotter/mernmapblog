import React, {useRef, useState, useEffect} from 'react'

import Button from "./Button"

import './ImageUpload.css'

const ImageUpload = props => {

    const [file, setFile] = useState();
    const [previewUrl, setPreviewUrl] = useState();
    const [isValid, setIsValid] = useState(false)

    const filePickerRef = useRef()

    useEffect(() => {
        if(!file) {
            return
        }
        const fileReader = new FileReader()
        fileReader.onload = () => {
            setPreviewUrl(fileReader.result)
        }
        fileReader.readAsDataURL(file)
    }, [file])

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
                {previewUrl && <img src={previewUrl} alt="preview"/> }
                {!previewUrl && <p> please pick an image</p>}
            </div>
            <Button type="button" onClick={pickImageHandler}> pick image</Button>
            </div>

        </div>
    )
}

export default ImageUpload