import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import '../styles/custom-styles.css';
const product = {
  id: '1',
  title:'Coffe-Mug - Card',
  img: './coffee-mug.png'
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <ProductCard product={product} className="bg-dark">
          <ProductCard.Image className="custom-image"/>
          <ProductCard.Title title='HOla mundo' className="text-white text-bold"/>
          <ProductCard.Buttons className="gcustom-buttons"/>
        </ProductCard>
        <ProductCard 
          product={product}
          className="bg-dark" 
        >
          <ProductImage className="custom-image"/>
          <ProductTitle title={''} className="text-white text-bold"/>
          <ProductButtons className="custom-buttons" style={{}}/>
        </ProductCard>

        <ProductCard 
          product={product}
          style={{
            backgroundColor:'#70D1F8'
          }} 
        >
          <ProductImage className="custom-image"/>
          <ProductTitle title={''} className="text-white text-bold"/>
          <ProductButtons className="custom-buttons"/>
        </ProductCard>
      </div>
     
    </div>
  )
}
