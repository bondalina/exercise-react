// import MailBox from './MailBox';
// import ProductCard from './ProductCard/ProductCard';
// import css from './App.module.css';
import { useEffect, useState } from 'react';
import { FetchArticles } from './articles-api';
import ArticlesList from './ArticlesList';
import SearchForm from './SearchForm';
// const productData = [
//   {
//     id: '1_product',
//     title: 'Taco X',
//     price: 4.5,
//     quontity: 8,
//     hasDiscount: true,
//     description: 'Fhjhvkjfd kfhf irghi khghg jfhg ug urggljsglj jhgjfhgk.',
//   },
//   {
//     id: '2_product',
//     title: 'Taco Large',
//     price: 6.5,
//     quontity: 4,
//     hasDiscount: false,
//     description: 'Fhjhvkjfd kfhf irghi khghg jfhg ug urggljsglj jhgjfhgk.',
//   },
//   {
//     id: '3_product',
//     title: 'Taco Small',
//     price: 3.5,
//     quontity: 2,
//     hasDiscount: false,
//     description: 'Fhjhvkjfd kfhf irghi khghg jfhg ug urggljsglj jhgjfhgk.',
//   },
//   {
//     id: '3_product',
//     title: 'Taco Medium',
//     price: 3.5,
//     quontity: 1,
//     hasDiscount: false,
//     description: 'Fhjhvkjfd kfhf irghi khghg jfhg ug urggljsglj jhgjfhgk.',
//   },
// ];
// const hidenStyle = {
//   display: 'none',
// };
function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  // Якщо треба отримувати дані з бекенда після дій користувача(відправка форми)
  // використовуємо функцію в якій робимо запит на бекенд
  const handleSearch = async newQuery => {
    // Зберігаємо новий термін пошуку:
    setQuery(newQuery);
    // Починаємо пошук з першої сторінки:
    setPage(1);
    // При пошуку нового артіклу очищуємо попередній масив артиклів
    setArticles([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  // useEffect(() => {}, []);

  useEffect(() => {
    // Щоб пропустити ефект монтування коли інпут порожній(щоб не відправлялись порожні
    // запити) використовуємо наступний патерн:
    if (query === '') {
      return;
    }
    async function getArticles() {
      try {
        setLoading(true);
        const data = await FetchArticles(query, page);
        // Щоб додати артікли в кінець до списку вже існуючих використовуємо
        // наступнаий патерн:
        setArticles(prevArticles => {
          return [...prevArticles, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getArticles();
  }, [page, query]);

  return (
    <div>
      <h1>HTTP запити</h1>
      <SearchForm onSearch={handleSearch} />
      {error && <b>Oops! Something go wrong</b>}
      {articles.length > 0 && <ArticlesList items={articles} />}
      {isLoading && <p>Please wait...</p>}
      {articles.length > 0 && !isLoading && (
        <button onClick={handleLoadMore}>Load more articles</button>
      )}
      {/* <MailBox /> */}
      {/* <div style={hidenStyle} className={css.cardGrid}>
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
      </div> */}
    </div>
  );
}

export default App;

// Робимо запит на дані якщо не треба чекати дій від користувача!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// useEffect(() => {
//   async function getArticles() {
//     try {
//       setLoading(true);
//       const data = await FetchArticles('react');
//       setArticles(data);
//     } catch (error) {
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   }
//   getArticles();
// }, []);
// Робимо запит на дані якщо не треба чекати дій від користувача!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
