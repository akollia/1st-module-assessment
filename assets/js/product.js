$(document).ready(function() {
    // this code is getting executed when the page is loading
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const category = urlParams.get('category');

    console.log(category)

    // the products simulate data being retrieved from somewhere else.
    // this could be a rest api serving a list of products
    var products = [{
            id: 1,
            imageSource: 'assets/img/sam1.jpg',
            price: '2000',
            name: 'Sam',
            description: 'just a description',
            taxonomy: 'shoes',
        },
        {
            id: 2,
            imageSource: 'assets/img/coach1.jpg',
            price: '2000',
            name: 'Coach',
            description: 'just a description',
            taxonomy: 'bags'
        },
        {
            id: 3,
            imageSource: 'assets/img/zimmerman1.jpg',
            price: '2000',
            name: 'Zimmerman',
            description: 'just a description',
            taxonomy: 'clothing'
        }
    ]

    // this function creates the product html element out of each product object
    function productTemplate(product) {
        return "<div class='flex-item' id='" + product.id + "'>" +
            "<img src='" + product.imageSource + "' alt='' width='600'>" +
            "<button class='add-to-cart' data-id='" + product.id + "' data-name='" + product.name + "' data-price='" + product.price + "'>Add to basket</button>" +
            "<span>" + product.name + "</span>" +
            "<span>" + product.description + "</p>" +
            "<span>£" + product.price + "</span>" +
            "</div>";
    }

    var container = $('.flex-container')
    if (category == null) {
        products.forEach(function(product) {
            container.append(productTemplate(product))
        });
    } else {
        products.forEach(function(product) {
            if (category === product.taxonomy) {
                container.append(productTemplate(product))
            }
        });
    }

    var shoppingCart = (function() {
        var cart = []

        function Item(name, price, count) {
            this.name = name;
            this.price = price;
            this.count = count;
        }

        // =============================
        // Public methods and propeties
        // =============================
        var obj = {};

        // Add to cart
        obj.addItemToCart = function(name, price, count) {
            for (var item in cart) {
                if (cart[item].name === name) {
                    cart[item].count++;
                    return;
                }
            }
            var item = new Item(name, price, count);
            cart.push(item);
        }

        obj.totalCount = function() {
            var totalCount = 0;
            for (var item in cart) {
                totalCount += cart[item].count;
            }
            return totalCount;
        }

        return obj;
    })();

    $('.add-to-cart').click(function(event) {
        event.preventDefault();
        var name = $(this).data('name');
        var price = Number($(this).data('price'));
        shoppingCart.addItemToCart(name, price, 1);
        console.log('clicked')
        $('.total-count').html(shoppingCart.totalCount());
    });
});