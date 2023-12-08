import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemListContainer = ({productsData}) => {
  
  return (
    <div>
      <div className='row justify-content-center mx-4'>
        {productsData.map ((products) => {
          return (
            <Card key = {products.id} className='mx-3 my-3 border-info' style={{ width: '18rem', borderRadius:"20px" }}>
            <Card.Img variant="top" src={products.thumbnail} style={{height: "15rem", borderRadius : "30px", marginTop : "10px"}}/>
            <Card.Body className='bg-trnasparent text-danger'>
              <Card.Title>{products.Title}</Card.Title>
              <Card.Text>
                ${products.price}USD 
              </Card.Text>
              <Button className='btn-warning' variant="primary">Añadir al carrito</Button>
            </Card.Body>
          </Card>
          )
        })}
      </div>
    </div>
  )
}

export default ItemListContainer