
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useState } from "react";
import './AddProduct.css';


function AddProduct() {
    const [selectedImage, setSelectedImage] = useState();

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: '',
        price: '',
        image: '',
        location: '',
        quantity: 0
    });

    const handleNameChange = (event) => {
        setFormData({ ...formData, name: event.target.value });
    }
    const handleDescriptionChange = (event) => {
        setFormData({ ...formData, description: event.target.value });
    }
    const handleCategoryChange = (event) => {
        setFormData({ ...formData, category: event.target.value });
    }
    const handlePriceChange = (event) => {
        setFormData({ ...formData, price: event.target.value });
    }
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0])
            setFormData({ ...formData, image: e.target.files[0] });
        }
    };

    const onSubmit = (e) => {
        e.preventDefault()
        alert(URL.createObjectURL(selectedImage))
    }

    const styles = {
        preview: {
            marginTop: 10,
            dispay: 'flex',
            flexDirection: 'column',
        },
        image: { maxWidth: '100%', maxHeight: 320 },
        delete: {
            cursor: 'pointer',
            padding: 6,
            marginTop: 10,
            background: "red",
            color: 'white',
            border: '2px solid',
            borderRadius: 8,

        }
    }

    const removeSelectedImage = () => {
        setSelectedImage();
    };


    return (
        <>
            <div className="container my-3">
                <br></br> <br></br> <br></br> <br></br>
                <div className="row">

                    <div className="col-md-6">
                        <div className="left-box px-4 py-1">
                            <div className="d-flex justify-content-start py-3">
                                <p className=' fs-3 text-right fw-bold text-light'>Add Images</p>
                            </div>
                            <form onSubmit={onSubmit} className='form-inline'>
                                <div className='form-group'>
                                    <label className='text-warning fw-bold'>Choose File to Uploade:</label>
                                    <input type='file' className='form-control' onChange={imageChange} accept='image/*' />

                                </div>
                            </form>

                            {
                                selectedImage && (
                                    <div style={styles.preview}>
                                        <img
                                            src={URL.createObjectURL(selectedImage)}
                                            style={styles.image}
                                            alt="Thumb"
                                        />
                                        <button onClick={removeSelectedImage} style={styles.delete}>
                                            Delete Image
                                        </button>
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="right-box">
                            <Form className='px-4 py-2'>
                                <Form.Group className="mb-2" controlId="formBasicEmail">
                                    <div className="d-flex justify-content-start">
                                        <Form.Label><p className="fw-bold my-1 text-light">Product  Name
                                        </p></Form.Label>
                                    </div>
                                    <Form.Control type="tex" placeholder="Product name" />
                                </Form.Group>


                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <div className="d-flex justify-content-start">
                                        <Form.Label><p className="fw-bold my-1 text-light">Category
                                        </p></Form.Label>
                                    </div>
                                    <Form.Select aria-label="Default select example">
                                        <option value="1">Fruits</option>
                                        <option value="2">Vegetables</option>
                                        <option value="3">Food Grains</option>
                                    </Form.Select>
                                </Form.Group>


                                <div className="d-flex justify-content-start">
                                    <Form.Label><p className="fw-bold my-1 text-light">Price
                                    </p></Form.Label>
                                </div>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>₹</InputGroup.Text>
                                    <Form.Control aria-label="Amount (to the nearest dollar)" />
                                    <InputGroup.Text>.00</InputGroup.Text>
                                </InputGroup>


                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <div className="d-flex justify-content-start">
                                        <Form.Label><p className="fw-bold my-1 text-light">Discription
                                        </p></Form.Label>
                                    </div>
                                    <Form.Control as="textarea" placeholder="Discription" rows={3} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <div className="d-flex justify-content-start">
                                        <Form.Label><p className="fw-bold my-1 text-light">Location
                                        </p></Form.Label>
                                    </div>
                                    <Form.Control type="tex" placeholder="Location" />
                                </Form.Group>


                                <div className="d-flex justify-content-end me-2">
                                    <Button variant="primary" type="submit">
                                        Add Product
                                    </Button></div>

                            </Form>

                        </div>
                    </div>
                </div>

            </div>

        </>
    )

}

export default AddProduct;