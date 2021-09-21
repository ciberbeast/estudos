$('#submit').click( (e) => { 

    let ano = $("#texto").val();
    let anoAtual = 2021;
    let result = anoAtual - ano;
    
    let result2 = validation(result, ano);

    $("#result").text(result2)
});

$(document).ready(function () {
    let query = location.search.slice(1);
    let array = users(query);

    $.each(array, function(index, value){
        $("#user").append("<li>"+ value.nome +"</li>");
    });

    
});

function validation(result, ano){

    switch(result){
        case result === 0:
            return result = "Você tem alguns dias ou meses de vida";
            break 
        case result < 0:
            return result = "Porra você ainda não nasceu";
            break 
        case ano === "":
            return result = "Digite alguma coisa";
            break
        case result > 200:
            return result = "Provavelmente você é um viajante do passado com " + result + " Ano de existencia.";
            break
        default:
            return  "Fodeu!!!!"
            break

    }
}

function users(group){
    switch(group) {
        case "1":
            return users = [
                {nome: "Judson", img: "1.jpg"},
                {nome: "Renato", img: "2.jpg"},
                {nome: "Renato", img: "2.jpg"},
                {nome: "Renato", img: "2.jpg"},
                {nome: "Renato", img: "2.jpg"},
                {nome: "Renato", img: "2.jpg"},
                {nome: "Renato", img: "2.jpg"},
                {nome: "Renato", img: "2.jpg"},
                {nome: "Renato", img: "2.jpg"},
                {nome: "Renato", img: "2.jpg"},
                {nome: "Renato", img: "2.jpg"},
                {nome: "Renato", img: "2.jpg"},
                {nome: "Renato", img: "2.jpg"},
                {nome: "Renato", img: "2.jpg"},
                {nome: "Renato", img: "2.jpg"},
                {nome: "Renato", img: "2.jpg"},
                {nome: "Renato", img: "2.jpg"},
                {nome: "Renato", img: "2.jpg"},
                {nome: "Renato", img: "2.jpg"},
                {nome: "Renato", img: "2.jpg"},
                {nome: "Renato", img: "2.jpg"},
                {nome: "Renato", img: "2.jpg"},
                {nome: "Renato", img: "2.jpg"},
            ]
        break;
        case "2":
            return users = [
                {nome: "Barbara", img: "1.jpg"},
                {nome: "Diane", img: "2.jpg"},
            ]
        break;
        case "3":
            return users = [
                {nome: "Camila", img: "1.jpg"},
                {nome: "Laila", img: "2.jpg"},
            ]
        break;
        default:
            return users = [
                {nome: "Fabricio", img: "1.jpg"},
            ]
    }
}