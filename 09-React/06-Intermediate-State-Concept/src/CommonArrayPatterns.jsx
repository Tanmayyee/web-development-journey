// COMMON PATTERNS FOR UPDATTING ARRAYS IN REACT STATE

const shoppingCart=[
    { id: 1, product: "APPLES", price: 2.99 },
    { id: 2, product: "EASY BAKE OVEN", price: 29.99 },
    { id: 3, product: "PEACH PIE", price: 3.99 },
];

//ADDING TO AN ARRAY
[...shoppingCart, { id: 4, product: "BANANAS", price: 1.99 }];

//REMOVING FROM AN ARRAY
shoppingCart.filter((item) => item.id !== 2);

//UPDATING AN ARRAY
shoppingCart.map((item) => {
    return {...item , product: item.product.toLowerCase()}
})

//MODIFYING OR UPDATING A PARTICULAR ITEM IN AN ARRAY
shoppingCart.map((item) => {
    if (item.id === 2) {
        return {...item, price: 19.99};
    }else{
        return item;
    }
});

//SORTING AN ARRAY
//DO NOT SORT ORIGINAL ARRAY, ALWAYS MAKE A COPY OF IT FIRST
[...shoppingCart].sort((a, b) => a.price - b.price);