function Product(){
    let product = [
        {title: 'Shampoo'},
        {title: 'Haie oil'}
    ]
    return(
        <>
        <p>Product</p>
        {
  product.map(prod => (
    <p>{prod.title}</p>
  ))
}
    
    </>
    );

}

export default Product;