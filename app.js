(function () {
    let arrShoppingList = [{
        name: 'tomatoes',
        quantity: 12,
        isBought: true
    }, {
        name: 'pineapples',
        quantity: 5,
        isBought: false
    }, {
        name: 'porke, kg',
        quantity: 3,
        isBought: true
    }, {
        name: 'jagermaister, bottles',
        quantity: 4,
        isBought: false
    }];

    let notboughtArr = arrShoppingList.filter((bought) => {
        return !bought.isBought;
    });

    let boughtArr = arrShoppingList.filter((bought) => {
        return bought.isBought;
    });

    console.log(notboughtArr, boughtArr);

    function addNewProduct(add) {
        arrShoppingList.unshift(add);
    }

    let newProduct = {
        name: 'icecream',
        quantity: 6,
        isBought: true
    }

    addNewProduct(newProduct);

    console.log(arrShoppingList);

    let bought = arrShoppingList.find(item => item.isBought == true);

    console.log(`${bought.name} is bought`);
})();

(function () {
    let bill = [

        tomatoes = {
            name: 'tomatoes',
            quantity: 12,
            price: 40
        },

        pinapples = {
            name: 'pineapples',
            quantity: 5,
            price: 200
        },

        porke = {
            name: 'porke, kg',
            quantity: 3,
            price: 300
        },

        jaermeister = {
            name: 'jagermaister, bottles',
            quantity: 4,
            price: 1600
        }];

    let res = bill.slice();

    let print = () => {
        for (let i in res) {
            document.writeln(`<b>Receipt position #${+i + +1}:</b> 
            Product name: ${res[i].name} | 
            Quantity of product: ${res[i].quantity} | 
            Price: ${res[i].price};<br>`);
        }
    };
    print();

    // document.writeln нормально не паше, тому <br>. Я пам'ятаю, що <br> - це ЗЛО))

    let newBill = [tomatoes.price, pinapples.price, porke.price, jaermeister.price]

    function arraySum(array) {
        var sum = 0;
        for (var i = 0; i < array.length; i++) {
            sum += array[i];
        }

        return sum;
    }

    console.log(arraySum(newBill));

    function getMaxOfArray(newBill) {
        return Math.max.apply(null, newBill);
    }

    console.log(getMaxOfArray(newBill));

    function average(newBill) {
        return newBill.reduce((a, b) => (a + b)) / newBill.length;
    }

    console.log(average(newBill));
})();

(function () {
    let styles = {
        color: 'aqua',
        'font-size': '32px',
        'text-align': 'center',
        'text-decoration': 'underline',
        'text-transform': 'uppercase',
        border: '1px dashed green',
        'letter-spacing': '2px'
    };

    let newStyle = genStrStyleFromObj(styles);
    function genStrStyleFromObj(obj) {
        let strStyle = '';
        for ([attrStyle, valStyle] of Object.entries(obj)) {
            strStyle += `${attrStyle}: ${valStyle};`;
        }
        return strStyle;
    }

    document.write(`<p style="${newStyle}">wouldnt it be better to leave css work for
     style.css file instead of using js like in this tusk?<p>`)
})();



