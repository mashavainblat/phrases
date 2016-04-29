// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


// background-image: url(<%= phrase.image %>)

$(document).ready(function(){

$("body").css({"background-image": "url(http://i.imgur.com/6L9hPgB.png)"})
$("body").css({"background-color": "#f9809c"})
counter = 0;

	$("button").click(function(){
		// console.log("clicking button")
		$.ajax({
			method: "GET",
			url: "/phrases/json"
		}).then(
			function(response){
				console.log(counter)
				// console.log("response: ", response)
				//loop through phrases.image
				// for(var i = 0; i<response.length; i++){
					// console.log("response[i].image: ", response[i].image)
					// console.log("response[counter].image", response[counter].image)
					// console.log("response[counter].background_color: ", response[counter].background_color)
					var imgUrl = response[counter].image
					var background_color = response[counter].background_color
					// var imgUrl = image.toString()
					console.log("imgUrl: ", imgUrl)
					console.log("background_color: ", background_color)


					// console.log("body: ", $("body"))
					$("body").css({"background-image": "url("+imgUrl+")"})
					$("body").css({"background-color": background_color})
					counter ++
					if(counter>=response.length){
						counter = 0
					}
				// } //ends for loop



			},
			function(error){
				console.log(error)
			}
		)
	});
}) //ENDS DOCUMENT.READY



// var onUpload = function(err, metadata) {
//     ospry.get({
//       url: metadata.url,
//       maxHeight: 400,
//       imageReady: function(err, domImage) {

//         var path = window.location.pathname.split('/')[2]

//         var data = { image: domImage.src }

//         $('body').append(domImage); 

//         $.ajax({
//           url: '/users/' + path + '/updatejson',
//           data: data,
//           method: 'PUT'
//         }).then(function(result) {
//           console.log(result);
//           location.reload();
//         });
//         // make POST request to Users controller
//         // to add img url to user
//       $.ajax({
//           url: '/hikes/' + path + '/updatejson2',
//           data: data,
//           method: 'PUT'
//         }).then(function(result) {
//           console.log(result);
//           location.reload();
          
//         });
//       },
//     });
//   }; // end onupload function 