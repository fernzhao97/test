
//implement a cart feature:
//1: add items to cart
//2: add 3% tax to item in cart
//3: buy item: cart --> purchases
//4: empty cart
//Bonus:
// accept refunds
// Track user history




const fern = {
    name: 'humean',
    cart:[]
}
const user={
    name:'Kim',
    active:true,
    cart:[],
    purchases:[]
}
//console.log(purchasesItem(user,{name:'laptop',purchases:344}))

//compose
const AmazonHistory =[]

const compose = (f,g) => (...args) =>f(g(...args));

console.log(purchasesItem(
    emptyCart,
    buyItem,
    applyTaxToItem,
    addToCart
)(user,{name:'laptop',price:3448})
)



// function purchasesItem(user,item){
//     return Object.assign({Test:'AA',Test2:'ZZ'},user,{purchases:item})
// }

function purchasesItem(...fns) {

    return fns.reduce(compose)

}

function addToCart(user,item){
    AmazonHistory.push(user)
    const updateCart = user.cart.concat([item])
    return Object.assign({},user,{cart:updateCart})
}

function applyTaxToItem(user){
    const {cart} = user;
    const taxRate = 1.3;
    const updateCart = cart.map(item =>{
        return{
            name:item.name,
            price:item.price*taxRate
        }
    })
    return Object.assign({},user,{cart:updateCart})
}

function buyItem(user){
    AmazonHistory.push(user)
    return Object.assign({},user,{purchases: user.cart})
}

function emptyCart(user){
    AmazonHistory.push(user)
    return Object.assign({},user,{cart:[]})
}

function refundItem(){

}

console.log(AmazonHistory)

function gerUserState(){}
function goBack(){}