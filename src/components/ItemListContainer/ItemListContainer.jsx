import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./ItemListContainer.css"
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import LoadingComponent from '../LoaderComponent/LoadingComponent';

const ItemListContainer = ({productsData}) => {
  
  return (
    <div>
      <div style={{minHeight:"70vh"}} className='row justify-content-center mx-4 bgBodyCard m-3 align-items-center'>
        {productsData.length <=0 ? <LoadingComponent /> : 
        productsData.map ((products) => {
          return (
            <Card key = {products.id} className='mx-3 my-3 border-info bgCard' style={{ width: '18rem', borderRadius:"20px" }}>
            <Link to = {`/item/${products.id}`}>
            <Card.Img variant="top" src={products.thumbnail} style={{height: "15rem", borderRadius : "30px", marginTop : "10px"}}/>
            </Link>
            <Card.Body className='text-danger'>
              <Card.Title>{products.title}</Card.Title>
              <div style={{color:"rgb(33, 164, 197)"}}>
                ${products.price}USD 
              </div>
              <ItemCount />
            </Card.Body>
          </Card>
          )
        })}
      </div>
    </div>
  )
}

export default ItemListContainer