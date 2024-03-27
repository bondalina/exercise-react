const ProductCard = ({ title, price, description, hasDiscount }) => {
  return (
    <div>
      <img
        src="https://mojo.generalmills.com/api/public/content/GmHhoT5mr0Sue2oMxdyEig_gmi_hi_res_jpeg.jpeg?v=fdaa7c14&t=466b54bb264e48b199fc8e83ef1136b4"
        alt="Taco"
      />
      <h3>
        {title} {hasDiscount ? <span>BIG SALE</span> : null}
      </h3>
      <h4>Price: ${price}</h4>
      <p>{description}</p>
      <button type="button">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
