import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ImageP() {
  return (
    <div className='Black NavbarNav' id='use'>
        <div className='Card1'>
            <Card style={{ width: '18rem' }} className='cardwidth card1st'>
                <Card.Img variant="top" src="C:\Users\sarva\OneDrive\Desktop\Codes\FinalWork\finalwork\src\Assets\pdflogo.jpg" />
                <Card.Body>
                    <Card.Title>PDF-TEXT</Card.Title>
                    <Card.Text>
                    Exrtact Text from PDF
                    </Card.Text>
                    <a href='#pdf-text'><Button variant="primary">Check it out</Button></a>
                </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className='cardwidth'>
                <Card.Img variant="top" src='C:\Users\sarva\OneDrive\Desktop\Codes\FinalWork\finalwork\src\Assets\pdflogo.jpg' />
                <Card.Body>
                    <Card.Title>PDF-IMAGE</Card.Title>
                    <Card.Text>
                    Exrtact Images from PDF
                    </Card.Text>
                    <a href='#pdf-image'><Button variant="primary">Check it out</Button></a>
                </Card.Body>
        </Card>
        </div>
    </div>
  )
}

export default ImageP;