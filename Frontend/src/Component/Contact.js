import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/esm/Button';
function Contact() {
    return (
      <div className='FormC' id='Contact'>
        <h1>Contact US:</h1>
        <div className='control'>
            <div className='contorl2'>
                <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <Form.Control
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
                </InputGroup>
        
                <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                </InputGroup>
        
                <Form.Label htmlFor="basic-url"></Form.Label>
                <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon3">
                    Queries
                </InputGroup.Text>
                <Form.Control id="basic-url" aria-describedby="basic-addon3" />
                </InputGroup>
                <InputGroup>
                <InputGroup.Text>Suggestions</InputGroup.Text>
                <Form.Control as="textarea" aria-label="With textarea" />
                </InputGroup>
                <Button variant="primary" type='submit' className='button1'>Submit</Button>
            </div>
        </div>
      </div>
    );
  }
  
  export default Contact;