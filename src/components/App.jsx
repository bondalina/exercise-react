import MailBox from './MailBox';
import ProductCard from './ProductCard';
const productData = [
  {
    id: '1_product',
    title: 'Taco X',
    price: 4.5,
    hasDiscount: true,
    description: 'Fhjhvkjfd kfhf irghi khghg jfhg ug urggljsglj jhgjfhgk.',
  },
  {
    id: '2_product',
    title: 'Taco Large',
    price: 6.5,
    hasDiscount: false,
    description: 'Fhjhvkjfd kfhf irghi khghg jfhg ug urggljsglj jhgjfhgk.',
  },
  {
    id: '3_product',
    title: 'Taco Small',
    price: 3.5,
    hasDiscount: false,
    description: 'Fhjhvkjfd kfhf irghi khghg jfhg ug urggljsglj jhgjfhgk.',
  },
];

function App() {
  return (
    <div>
      <MailBox />
      {productData.map(item => {
        return (
          <ProductCard
            key={item.id}
            title={item.title}
            price={item.price}
            hasDiscount={true}
            description={item.description}
          />
        );
      })}
    </div>
  );
}

export default App;
