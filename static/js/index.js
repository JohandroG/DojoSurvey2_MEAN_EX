console.log("Server On (Now)");

let socket = io("http://localhost:8080");


$('.forminfo').on('submit', function(event){
    event.preventDefault();

    let namey = $('#yname').val();
    let location = $('#location').val();
    let language = $('#language').val();
    let comment = $('#comment').val();
    let number = Math.floor(Math.random()*1000);

    let info={
        name: namey,
        location: location,
        language: language,
        comment: comment,
        number: number
    };
    
    socket.emit('information', info);
});

socket.on('display', function(info){
    let message = `<p> You emited the following information to the server: Name: ${info.name}, Location: ${info.location}, Favorite language: ${info.language} and Comment: ${info.comment} and your lucky number emited by the server is: ${info.number} </p>`;
    $('.message' ).append(message);
});

