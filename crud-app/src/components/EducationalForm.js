import React, { useEffect, useState } from 'react'
import { Button, FormGroup, Modal, Form } from 'react-bootstrap'

function EducationalForm(props) {
    const [educationFormData, seteducationFormData] = useState({
        name: ' ',
        course: '',
        education: ' ',
        institution: '',
        yop: '',
    })
    const handleClose = () => {
        props.updateShowModal('', false)
    }
    const saveData = () => {
        props.getEducationData(educationFormData)

    }
    useEffect(() => {
        seteducationFormData({ ...props.editableEducation })
    }, [props.editableEducation])

    return (
        <div >
            <Modal show={props.showModal} onHide={handleClose} >
                <Modal.Header closeButton >
                    <Modal.Title >Education Detail</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form id="form1" >
                        <FormGroup style={{ fontWeight: 'bold' }}>

                            <label  >Student Name: </label>
                            <input style={{ margin: '10px', borderRadius: '5px' }} value={educationFormData.name}
                                onChange={(e) => {
                                    seteducationFormData({ ...educationFormData, name: e.target.value })
                                }} />
                            <br />

                            <label  >Course: </label>
                            <input style={{ margin: '10px', borderRadius: '5px',marginLeft:'65px' }} value={educationFormData.course}
                                onChange={(e) => {
                                    seteducationFormData({ ...educationFormData, course: e.target.value })
                                }} />
                            <br />

                            <label >Degree: </label>
                            <input style={{ margin: '10px', borderRadius: '5px' ,marginLeft:'65px' }} value={educationFormData.education}
                                onChange={(e) => {
                                    seteducationFormData({ ...educationFormData, education: e.target.value })
                                }} />
                            <br />

                            <label >University: </label>
                            <input style={{ margin: '10px', borderRadius: '5px',marginLeft:'45px' }} value={educationFormData.institution}
                                onChange={(e) => {
                                    seteducationFormData({ ...educationFormData, institution: e.target.value })
                                }} />
                            <br />

                            <label >Year of Passing: </label>
                            <input style={{ margin: '10px', borderRadius: '5px',marginLeft:'10px' }} value={educationFormData.yop}
                                onChange={(e) => {
                                    seteducationFormData({ ...educationFormData, yop: e.target.value })
                                }} />

                        </FormGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={saveData}>
                        {props.modalType === 'add' ? 'ADD' : 'EDIT'}
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default EducationalForm
