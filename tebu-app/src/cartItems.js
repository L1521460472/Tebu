

let itemstr = localStorage.getItem('cartItem');

let items = [];

if (itemstr) {
    try {
        items = JSON.parse(itemstr);
    } catch (e) {
        items = [];
    }
}


export const cartItems = items;
export function add2Cart(goods) { 
    let item = cartItems.find(function (item) {
        return goods[0].name === item.name && goods[0].color === item.color
    });     
    if (item) {
        item.count = item.count + goods[0].count
    }else{
            cartItems.push(goods[0]);
        }

    
    localStorage.setItem("cartItem", JSON.stringify(cartItems));
}

export function delCart(goods_id) { 
    let index = cartItems.findIndex((item) => {
        return goods_id === item.id
    });

    if (index !== -1) {
        cartItems.splice(index, 1);
    }
    localStorage.setItem("cartItem", JSON.stringify(cartItems));

}


let addressStr = localStorage.getItem('address_list');

let addr_list = [];

if (addressStr) {
    try {
        addr_list = JSON.parse(addressStr);
    } catch (err) {
        addr_list = [];
    }


}

export const address_list = addr_list;


export function addAddress(address) {
    address_list.push(address)
    localStorage.setItem('address_list', JSON.stringify(address_list))
}
