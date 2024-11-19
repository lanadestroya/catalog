$(document).ready(function() {
    let totalCount = 0;

    $('.addToCart').click(function() {
        const productDiv = $(this).closest('.product');
        const productName = productDiv.data('product');
        const productImage = productDiv.find('img').attr('src'); 

        if (productImage) {
            $("#cart").append(
                '<li class="cart-item">' +
                '<img src="' + productImage + '" alt="' + productName + '">' +
                productName +
                '<button class="removeFromCart">Удалить</button>' +
                '</li>'
            );
            totalCount++;
            $('#totalCount').text(totalCount);
        } else {
            alert('Image not available for ' + productName + '. Please select a product with an image.');
        }
    });

    $('#cart').on('click', '.removeFromCart', function() {
        $(this).closest('.cart-item').remove();
        totalCount--;
        $('#totalCount').text(totalCount);
    });
});