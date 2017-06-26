$(function(){
  let index = 0;// l'index permettra de parcourir notre tableau d'image
  setInterval(function(){// permet d'effectuer une fonction toute les x second

        let image = ["https://ih0.redbubble.net/image.4052455.5896/flat,800x800,070,f.jpg","http://ufonews.su/news58/075.jpg","http://dreamicus.com/data/image/image-03.jpg "];//variable qui stock nos image .
        if(index == image.length)// condition pour revenire a la premier image
          index=0;
          $("#slider-Mike").attr("src",image[index]);// nous permet de modifier la src de l'image
          index++;
  },3000);


  $(".one_third").one("click",function(){// fonction ce declanche au click sur l'id imageMike
    $("#imagesMike1").attr("src","https://ih0.redbubble.net/image.4052455.5896/flat,800x800,070,f.jpg");//modifier la source de l'image
    $("#imagesMike2").attr("src","http://ufonews.su/news58/075.jpg");//modifier la source de l'image
    $("#imagesMike3").attr("src","http://dreamicus.com/data/image/image-03.jpg");//modifier la source de l'image
  });


  $(".one_third").click(function(){ // Function se declanche au click sur la class one_third
      let image =$("imagesMike1").attr("src");
    $("#imagesMike1").attr("src",$("#imagesMike3").attr("src")); // Je stock la valeur src de la premier image dans la variable
    $("#imagesMike3").attr("src",$("#imagesMike2").attr("src"));
    $("#imagesMike2").attr("src",image);
  });

  let tableau = ["toto","tata","titi"];
  let objet = {"truc":"much","zaza":1};

  console.log(tableau);
  console.log(objet);
  // var petitMike = 0;
  //  if(1==1){
  //    let petitMike =1;
  //  }
  // console.log(petitMike);

//*****************exercice 4*********************
  $(".one_quarter .more > a").click(function(){

      event.preventDefault();// annuler l'evenement par defaut

    console.log($(this))//balise a selectioner
    console.log($(this).parent())//balise a selectioner
    console.log($(this).parent().parent())//balise a selectioner
    console.log($(this).parent().parent().children("p"))//balise a selectioner


  $(this).parent().parent().children("p").eq(0).append("f,dklfhslhcfsdlifhcsdfhsdhvfsdlfhqsdql");//

  });

//*****************exercice 5*********************
var request = $.ajax({//envoi d'une request sur une url avec une methode
  url:"https://jsonplaceholder.typicode.com/users",//
  method: "GET",
  dataType: "Json"// optionel defini le type de donnee recu par le serveur
});

request.done(function( users ) {// done = success - Code a effectué en cas de reussite.
  let content="";
  console.log(users);
  for(var i= 0; i< users.length;i++){
    content +='<li><a href="#" >'+users[i].name+'</a></li>'
  }
  $("#right_column ul").html(content)//evenement du DOM de l'html dans la balise ul qui se trouve dans la balise qui a l'id right_column - content contien le code html
});

request.fail(function( jqXHR, textStatus ) {// fail= echec  Code à effectuer en cas d'echec repose en cas d'echec
  alert( "Request failed: " + textStatus );
});

/***************************Exercice-6****************************/
$.ajax({
  url:"https://jsonplaceholder.typicode.com/photos",//
  method: "GET",
  dataType: "Json"

  })
  .done(function( photos ) { // done = success - Code a effectué en cas de reussite.
    console.log($("#post img"));
    for(var i= 0; i< 2;i++){
      $("#posts img").eq(i).attr("src",photos[i].url)
     }

   $("#posts .more > a").click(function(){
         event.preventDefault();// annuler l'evenement par defaut

       console.log($(this))//balise a selectioner
       console.log($(this).parent())//balise a selectioner
       console.log($(this).parent().parent())//balise a selectioner
       console.log($(this).parent().parent().children("img"))//balise a selectioner

       for(var i= 0; i< 2;i++){
         if (photos[i].url==
         $(this).parent().parent().parent().children("img").attr("src")){
           $(this).parent().parent().children("p").append(photos[i].title);

         }
       }

     });
   })


    .fail(function( jqXHR, textStatus ) {// fail= echec  Code à effectuer en cas d'echec repose en cas d'echec
      alert( "Request failed: " + textStatus );
    })

});
