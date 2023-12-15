import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./ItemListContainer.css"
import { Link } from 'react-router-dom';

const ItemListContainer = ({productsData}) => {
  
  return (
    <div>
      <div className='row justify-content-center mx-4 bgBodyCard m-3'>
        {productsData.map ((products) => {
          return (
            <Card key = {products.id} className='mx-3 my-3 border-info bgCard' style={{ width: '18rem', borderRadius:"20px" }}>
            <Link to = {`/item/${products.id}`}>
            <Card.Img variant="top" src={products.thumbnail} style={{height: "15rem", borderRadius : "30px", marginTop : "10px"}}/>
            </Link>
            <Card.Body className='text-danger'>
              <Card.Title>{products.title}</Card.Title>
              <Card.Text>
                {products.description}
              </Card.Text>
              <div>
                ${products.price}USD 
              </div>
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