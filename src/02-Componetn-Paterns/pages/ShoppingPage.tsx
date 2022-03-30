import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import '../styles/custom-styles.css';
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';



export const ShoppingPage = () => {

  const { onProductCountChange, shoppingCart } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>

        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark"
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count ?? 0}
          >
            <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px #1d1d1d' }} />
            <ProductTitle title={''} className="text-white text-bold" />
            <ProductButtons className="custom-buttons" style={{}} />
          </ProductCard>
        ))}


      </div>


      <div className='shopping-cart'>
        {/* {Object.keys(shoppingCart).map((key) => {
          const product = shoppingCart[key];
          return (
            <ProductCard
              key={key}
              product={product}
              className="bg-dark"
              style={{
                width: '100px'
              }}
            >
              <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px #1d1d1d' }} />
              <ProductButtons className="custom-buttons" style={{

              }} />
            </ProductCard>
          )
        })} */}
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className="bg-dark"
            style={{
              width: '100px'
            }}
            onChange={onProductCountChange}
            value={product.count}

          >
            <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px #1d1d1d' }} />
            <ProductButtons className="custom-buttons" style={{

            }} />
          </ProductCard>
        )
        )}
      </div>

      {/* <div>
        <code>
          {JSON.stringify(shoppingCart, null, 5)}
        </code>
      </div> */}
    </div>
  )
}






