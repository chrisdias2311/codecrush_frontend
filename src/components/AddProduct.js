
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useState } from "react";
import './AddProduct.css';

import axios from 'axios';
import { constant } from '../constants';


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
        console.log(formData)
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
    const handleLocationChange = (event) => {
        setFormData({ ...formData, location: event.target.value });
    }
    const handleQuantityChange = (event) => {
        setFormData({ ...formData, quantity: event.target.value });
    }

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


    const addProduct = (e) => {
        e.preventDefault()
        console.log(formData)

        if (formData.name !== '' && formData.description !== '' && formData.category !== '' && formData.price !== '' && formData.location !== '' && formData.image !== '') {

            e.preventDefault();

            const formdata = new FormData();
            formdata.append('ownerId', JSON.parse(localStorage.getItem('farmer'))._id);
            formdata.append('name', formData.name);
            formdata.append('description', formData.description);
            formdata.append('category', formData.category);
            formdata.append('price', formData.price);
            formdata.append('location', formData.location);
            formdata.append('quantity', formData.quantity);
            formdata.append('file', formData.image);

            axios.post(constant.URL + '/api/product/addproduct', formdata, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
                .then(res => {
                    
                    console.log(res);
                    if(res.status===200){
                        alert("Product Added Successfully")
                    }

                })
                .catch(err => {
                    
                    alert(err.response.data)
                });
        } else {
            alert("Error")
        }
    }


    return (
        <>
            <div className="container my-3">
                <br></br> <br></br> <br></br> <br></br>
                <div className="row" id="productbox">

                    <div className="col-md-6">
                        <div  className="left-box px-4 py-1">
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
                                    <Form.Control type="text" onChange={handleNameChange} placeholder="Product name" />
                                </Form.Group>


                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <div className="d-flex justify-content-start">
                                        <Form.Label><p className="fw-bold my-1 text-light">Category
                                        </p></Form.Label>
                                    </div>
                                    <Form.Select onChange={handleCategoryChange} aria-label="Default select example">
                                        <option value="Fruits">Fruits</option>
                                        <option value="Vegetables">Vegetables</option>
                                        <option value="Foodgrains">Food Grains</option>
                                        <option value="Fruits">Fruits</option>
                                    </Form.Select>
                                </Form.Group>


                                <div className="d-flex justify-content-start">
                                    <Form.Label><p className="fw-bold my-1 text-light">Price
                                    </p></Form.Label>
                                </div>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>₹</InputGroup.Text>
                                    <Form.Control onChange={handlePriceChange} aria-label="Amount (to the nearest dollar)" />
                                    <InputGroup.Text>.00</InputGroup.Text>
                                </InputGroup>


                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <div className="d-flex justify-content-start">
                                        <Form.Label><p className="fw-bold my-1 text-light">Description
                                        </p></Form.Label>
                                    </div>
                                    <Form.Control onChange={handleDescriptionChange} as="textarea" placeholder="Discription" rows={3} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <div className="d-flex justify-content-start">
                                        <Form.Label><p className="fw-bold my-1 text-light">Quantity
                                        </p></Form.Label>
                                    </div>
                                    <Form.Control onChange={handleQuantityChange} type="number" placeholder="Quantity" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <div className="d-flex justify-content-start">
                                        <Form.Label><p className="fw-bold my-1 text-light">Location
                                        </p></Form.Label>
                                    </div>
                                    <Form.Control onChange={handleLocationChange} type="tex" placeholder="Location" />
                                </Form.Group>


                                <div className="d-flex justify-content-end me-2">
                                    <Button variant="primary" type="submit" onClick={addProduct}>
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