import React from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'


class UpdateModalData extends React.Component {
constructor(props){
  super(props);
this.state = {
  id: this.props.bookToBeUpdated?._id,
  v: this.props.bookToBeUpdated?.__v,
  title: this.props.bookToBeUpdated?.title,
  description: this.props.bookToBeUpdated?.description,
  status: this.props.bookToBeUpdated?.status,
  method: this.props.bookToBeUpdated ? 'put' : 'post',
  formTitle: this.props.bookToBeUpdated ? 'Update My Favorite Book' : 'Add Book to My Favorites'
}
}

  handleSubmit = (event) => {
    // event.preventDefault();
    console.log('we are in handle book update function')
    let bookObj = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.checked,
      _id: this.state.id,
      __v: this.state.v
    }
    if (this.state.method === 'put') {
      this.props.updateBook(bookObj)
  } else {
      this.props.postBook(bookObj);
  }
  this.props.handleCloseModal();
  }



render() {
  return <Modal
  show={this.props.showModal}
  onHide={this.props.handleCloseModal}
  
  >
  <Modal.Header>

  </Modal.Header>
  <Modal.Body>

<Form onSubmit={this.handleSubmit}>

<Form.Group controlId='title'>
<Form.Label> Update Title Of Book</Form.Label>
<Form.Control type='text' placeholder='Enter Book Title'></Form.Control>
</Form.Group>

<Form.Group controlId='description'>
  <Form.Label> Update Description Of Book </Form.Label>
  <Form.Control type='text' placeholder='Enter Book Descripton'></Form.Control>
</Form.Group>


<Form.Group controlId='status'>
  <Form.Check type='checkbox' label='Finished Book' />
</Form.Group>

<Button type= 'submit' variant='primary'>Submit Form</Button>
</Form>

  </Modal.Body>

  <Modal.Footer>
  <Button return false type='submit' variant='primary' onClick={this.props.handleCloseModal}>Exit</Button>
  </Modal.Footer>
  
  </Modal>
}

}

export default UpdateModalData