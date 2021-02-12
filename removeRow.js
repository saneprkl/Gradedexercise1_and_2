if (document.readyState == 'loading'){
	document.addEventListener('DOMContentLoaded', loaded)
}
else {
	loaded()
}

function loaded(){
	var removeRowButtons = document.getElementsByClassName('fa-trash-alt')
	for (var i = 0; i < removeRowButtons.length; i++){
		var trash = removeRowButtons[i]
		trash.addEventListener('click', function(event) {
			var trashClicked = event.target
			trashClicked.parentElement.parentElement.remove()
			cartTotal()
		})
	}

	var quantityInput = document.getElementsByClassName('quantityNumber')
	for (var i = 0; i < quantityInput.length; i++) {
		var input = quantityInput[i]
		input.addEventListener('change', changeQuantity)
	}
}

function changeQuantity(event) {
	var input = event.target
	if (isNaN(input.value) || input.value <= 0) {
		input.value = 1
	}
	cartTotal()
}

function cartTotal(){
	var container = document.getElementsByClassName('maincartarea')[0]
	var cartItems = container.getElementsByClassName('CartItem')
	var total = 0
	for (var i = 0; i < cartItems.length; i++) {
		var cartItem = cartItems[i]
		var itemPrice = cartItem.getElementsByClassName('priceamount')[0]
		var quantityItem = cartItem.getElementsByClassName('quantityNumber')[0]
		var price = parseFloat(itemPrice.innerText.replace('€', ''))
		var quantity = quantityItem.value
		total = total + (price * quantity)
	}
	total = (Math.round(total * 100) / 100).toFixed(2);
	document.getElementsByClassName('itemstotalcostnumbers')[0].innerText = total + ' €'
	document.getElementsByClassName('totalcostmoney')[0].innerText = total + ' €'
	console.log(price, quantity)
}