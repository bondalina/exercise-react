import MailBox from './MailBox';
import ProductCard from './ProductCard/ProductCard';
import css from './App.module.css';
const productData = [
  {
    id: '1_product',
    title: 'Taco X',
    price: 4.5,
    quontity: 8,
    hasDiscount: true,
    description: 'Fhjhvkjfd kfhf irghi khghg jfhg ug urggljsglj jhgjfhgk.',
  },
  {
    id: '2_product',
    title: 'Taco Large',
    price: 6.5,
    quontity: 4,
    hasDiscount: false,
    description: 'Fhjhvkjfd kfhf irghi khghg jfhg ug urggljsglj jhgjfhgk.',
  },
  {
    id: '3_product',
    title: 'Taco Small',
    price: 3.5,
    quontity: 2,
    hasDiscount: false,
    description: 'Fhjhvkjfd kfhf irghi khghg jfhg ug urggljsglj jhgjfhgk.',
  },
  {
    id: '3_product',
    title: 'Taco Medium',
    price: 3.5,
    quontity: 1,
    hasDiscount: false,
    description: 'Fhjhvkjfd kfhf irghi khghg jfhg ug urggljsglj jhgjfhgk.',
  },
];

function App() {
  return (
    <div>
      <MailBox />
      <div className={css.cardGrid}>
        {[...productData]
          .sort((a, b) => {
            const isPromotionalA = a.quontity <= 2;
            const isPromotionalB = b.quontity <= 2;
            return isPromotionalB - isPromotionalA;
          })
          .map(item => {
            const isPromotional = item.quontity <= 2 ? true : false;
            return (
              <ProductCard
                key={item.id}
                title={item.title}
                price={item.price}
                hasDiscount={true}
                quontity={item.quontity}
                description={item.description}
                promotional={isPromotional}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
