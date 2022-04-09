$(document).ready(function(){

	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE //
	$('.category_list .category_item[category="todo"]').addClass('ct_item-active');

	// FILTRANDO PRODUCTOS  //

	$('.category_item').click(function(){
		var catProduct = $(this).attr('category');
		console.log(catProduct);

		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO //
		$('.category_item').removeClass('ct_item-active');
		$(this).addClass('ct_item-active');

		// OCULTANDO PRODUCTOS //
		$('.product-item').css('transform', 'scale(0)');
		function hideProduct(){
			$('.product-item').hide();
		} setTimeout(hideProduct,400);

		// MOSTRANDO PRODUCTOS //
		function showProduct(){
			$('.product-item[category="'+catProduct+'"]').show();
			$('.product-item[category="'+catProduct+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	});

	// MOSTRANDO TODOS LOS PRODUCTOS //

	$('.category_item[category="todo"]').click(function(){
		function showAll(){
			$('.product-item').show();
			$('.product-item').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});
});

		// MOSTRANDO DETALLE PRODUCTO //
		
		function muestra_oculta(id){
			if (document.getElementById){ //se obtiene el id
			var id = document.getElementById(id); //se define la variable "id" igual a nuestro div
			id.style.display = (id.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
			}
			}
			window.onload = function(){/*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/
			muestra_oculta('contenido');/* "Ver Detalles" es el nombre que le dimos al DIV */
			}
			