if (document.readyState == 'loading'){
	document.addEventListener('DOMContentLoaded', buyButtons);
}
else {
	buyButtons();
}

const products = [
{ id: 1000, qty: 0 },
{ id: 1001, qty: 0 }
];




function buyButtons() 
{
	var button = document.getElementsByClassName('BuyButton')
	var quantity = 0;
	

	for(var i = 0; i < button.length; i++){
		var buy = button[i];
	buy.addEventListener('click', function(event) {
			var buyClicked = event.target;
			var parent = buyClicked.parentElement.parentElement;
			var productDiv = parent.getElementsByClassName('productIDbox')[0];
			var productID = productDiv.innerText;
			
			quantity ++;
			if (productID == products.id) {
				var qtyincrease = products.id.qty;
				qtyincrease++;
				
			}
			

			
			console.log(quantity, products, productID);
		})
		}	

		
	
}



