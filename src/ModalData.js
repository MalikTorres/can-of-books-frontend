import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';




class ModalData extends React.Component {


  // handleBookSubmit = (event) => {
  //   event.preventDefault();
  
  //   let bookObj = {
  //     title: event.target.title.value,
  //     description: event.target.description.value,
  //     status: event.target.status.checked
  //   }
  //   console.log(bookObj);
  //   this.props.postBook(bookObj)
  // }


  render() {
    return <Modal
show={this.props.showModal}
onHide={this.props.handleCloseModal}
    >


      <Modal.Header>

      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={this.props.handleBookSubmit}>

          <Form.Group controlId='title'>
          <Form.Label>Title of Book</Form.Label>
          <Form.Control type='text' placeholder='Enter Book Title'></Form.Control>
          </Form.Group>

          <Form.Group controlId='description'>
          <Form.Label>Description of Book</Form.Label>
          <Form.Control type='text' placeholder='Enter Book Description'></Form.Control>
          </Form.Group>

          <Form.Group  controlId='status'>
          <Form.Check type='checkbox' label='Finshed Book'  />
          </Form.Group>

          <Button type='submit' variant='primary'>Submit Form</Button>
        </Form>
      </Modal.Body>
<Modal.Footer>
  <Button onClick={this.props.handleCloseModal}>
    Exit
  </Button>
</Modal.Footer>
    </Modal>
  }
}

export default ModalData