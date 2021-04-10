		menuAberto = false;
		var listaAndroid = document.getElementById('lista_android');
		var primeiroElemento = document.getElementById('primeiro');

		/* esconde o menu nav no caso o usuario use o pc*/
		window.addEventListener("resize", function () {
			if ( window.innerWidth >= 1277 ){
				listaAndroid.style.display = "none";

				primeiroElemento.style.marginTop = '0%';
			}
			console.log('escalando');
		});


		function abrirMenu(){

		//var listaAndroid = document.querySelector('botao').style.border = 'none';

			

			/* verifica se o menu está fechado então abre*/
			if(menuAberto == false ){
				menuAberto = true;

			}
			else{
				menuAberto = false;
			}


			if(menuAberto){
				listaAndroid.style.visibility = "visible";
				listaAndroid.style.display = "block";
			//	primeiroElemento.style.marginTop = '90%';

			}
			else{
				listaAndroid.style.visibility = "hidden";
				listaAndroid.style.display = "none";
				//primeiroElemento.style.marginTop = '0%';

			}





			console.log('teste');
		}