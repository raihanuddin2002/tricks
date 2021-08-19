/*==============================================================
*   Search a word into string in Object *without* property name
================================================================ */
const products = [
    'Dell hardcore i29 laptop',
    'lenevo Laptop bangla plus laptop',
    'Samsung phone minus',
    'I Phone'
];
const searching = 'bangla';
const searching1 = 'minus';
let output;
for (const product of products) {
    // for checking is here or not
    const i = product.includes(searching);
    const j = product.includes(searching1);
    // searching its index no where it is 
    const o = product.search(searching);
    const p = product.search(searching1);
    if (i) {
        output = product.substr(o, searching.length);
        //alternative-->  // output = product.slice(o, parseInt(searching.length) + o);
        console.log(output);
    }
    if (j) {
        output = product.substr(p, searching1.length);
        //alternative-->  //  output = product.slice(p, parseInt(searching1.length) + p);
        console.log(output); //** output => "minus" **
    }
}

/*==============================================================
*   Search a word into string in Object *with* property name
================================================================ */
const productsObj = [
    { name: "lenevo Laptop ghgh bangla plus laptop" },
    { name: "Samsung phone minus" }
];

const searchingObj = 'gh';
const searching1Obj = 'minus';
let outputObj = [];
for (const productObj of productsObj) {
    const i = productObj.name.includes(searchingObj);
    const j = productObj.name.includes(searching1Obj);
    const o = productObj.name.search(searchingObj);
    const p = productObj.name.search(searching1Obj);
    if (i) {
        outputObj.push(productObj.name.substr(o, searchingObj.length));
        // console.log(output); // return string 
    }
    if (j) {
        outputObj.push(productObj.name.substr(p, searching1Obj.length));
        // console.log(output); // return string 

    }
}
console.log(outputObj); // return array **// output => [ 'gh', 'minus' ]**

/*=================================
*   Search a word into string
===================================*/
const products = 'lenevo Laptop bangla plus laptop';
const searching = 'bangla';
const searching1 = 'plus';
let split = products.split(" ");

for (const product of split) {
    if (product == searching) {
        console.log(product); /** output => bangla **/
    }
    if (product == searching1) {
        console.log(product); /** output => plus **/
    }
}