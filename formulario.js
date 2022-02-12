'use strict'

function resetear () {
    location.reload();
}

function valoracion () {
    
    var valor = document.getElementById('rango').value;
    if (valor=='1'){
        swal("Has valorado con 1 punto", {
            icon : 'success',
        })
    } else if (valor=='2') {
        swal("Has valorado con 2 puntos", {
            icon : 'success',
        })
    } else if (valor=='3') {
        swal("Has valorado con 3 puntos", {
            icon : 'success',
        })
    } else if (valor=='4') {
        swal("Has valorado con 4 puntos", {
            icon : 'success',
        })
    } else if (valor=='5') {
        swal("Has valorado con 5 puntos", {
            icon : 'success'
        })
    }
}

function cuenta() {
    
    var pais = document.getElementById('spain').value
    var ibanusuario = document.getElementById('iban').value
    var entidadusuario = document.getElementById('entidad').value
    var sucursalusuario = document.getElementById('sucursal').value
    var dcusuario = document.getElementById('digitocontrol').value
    var numerousuario = document.getElementById('numerocuenta').value

    
    if (ibanusuario < 0 || ibanusuario > 99 || isNaN(ibanusuario) || ibanusuario == "" || ibanusuario == " " ){
        swal("Introduzca un número de dos dígitos en el campo Control IBAN", {
            icon : 'warning',
        });
    } else if (entidadusuario < 0 || entidadusuario > 9999 || isNaN(entidadusuario) || entidadusuario == "" || entidadusuario == " " ){
        swal("Introduzca un número de cuatro dígitos en el campo Entidad", {
            icon : 'warning',
        });
    } else if ( sucursalusuario < 0 || sucursalusuario > 9999 || isNaN(sucursalusuario) || sucursalusuario == "" || sucursalusuario == " " ){
        swal("Introduzca un número de cuatro dígitos en el campo Sucursal", {
            icon : 'warning',
        });
    } else if (dcusuario < 0 || dcusuario > 99 || isNaN(dcusuario) || dcusuario == "" || dcusuario == " " ){
        swal("Introduzca un número de dos dígitos en el campo DC", {
            icon : 'warning',
        });
    } else if (numerousuario < 0 || numerousuario > 9999999999 || isNaN(numerousuario) || numerousuario == "" || numerousuario == " " ){
        swal("Introduzca un número de diez dígitos en el campo Cuenta", {
            icon : 'warning',
        });
    } else {
        var usuario = pais + ibanusuario + "-" + entidadusuario + "-" + sucursalusuario + "-" + dcusuario + "-" + numerousuario;
        swal("Le informamos que su cuenta bancaria es: " + usuario, {
            icon : 'info',
        });
    }
    
}

function dia () {
    
    let dias = ["Domingo","Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    let date  = new Date(document.getElementById('day').value);
	swal("La fecha seleccionada es un: " + dias[date.getDay()], {
        icon : 'info',
    });
}

function postal () {

    var provincias = ["Alava", "Albacete", "Alicante", "Almeria", "Avila", "Badajoz", "Islas Baleares", "Barcelona", "Burgos", "Caceres", "Cadiz", "Castellon", "Ciudad Real", "Cordoba", "La Corunya", "Cuenca", "Gerona", "Granada", "Guadalajara", "Guipuzcoa", "Huelva", "Huesca", "Jaen", "Leon", "Lerida", "La Rioja", "Lugo", "Madrid", "Malaga", "Murcia", "Navarra", "Orense", "Asturias", "Palencia", "Las Palmas", "Pontevedra", "Salamanca", "Santa Cruz de Tenerife", "Cantabria", "Segovia", "Sevilla", "Soria", "Tarragona", "Teruel", "Toledo", "Valencia", "Valladolid", "Vizcaya", "Zamora", "Zaragoza", "Ceuta", "Melilla"];

    var codigos = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52"];

    let localizacion = document.getElementById('local').value;
    let codigopostalusuario = document.getElementById('cp').value;
    var codigopostal = codigopostalusuario.toString().substring(0,2);


    if (codigopostalusuario.length < 5 ){
        swal("Introduzca un número correcto en el campo Código Postal", {
            icon : 'warning',
        });
    } else if ( codigopostal < 0 || codigopostal > 99999 || codigopostal == "" || codigopostal == " " || isNaN(codigopostal)){
        swal("Introduzca un número correcto en el campo Código Postal", {
            icon : 'warning',
        });
    } else if (localizacion == "" || localizacion == " "){
        swal("Introduzca el nombre de una localidad correcta en el campo Localidad", {
            icon : 'warning',
        });

    } else if (
        (codigopostal == codigos[0] && localizacion == provincias[0]) || (codigopostal == codigos[1] && localizacion == provincias[1]) || (codigopostal == codigos[2] && localizacion == provincias[2]) || (codigopostal == codigos[3] && localizacion == provincias[3]) || (codigopostal == codigos[4] && localizacion == provincias[4]) || (codigopostal == codigos[5] && localizacion == provincias[5]) || (codigopostal == codigos[6] && localizacion == provincias[6]) || (codigopostal == codigos[7] && localizacion == provincias[7]) || (codigopostal == codigos[8] && localizacion == provincias[8]) || (codigopostal == codigos[9] && localizacion == provincias[9]) || (codigopostal == codigos[10] && localizacion == provincias[10]) || (codigopostal == codigos[11] && localizacion == provincias[11]) || (codigopostal == codigos[12] && localizacion == provincias[12]) || (codigopostal == codigos[13] && localizacion == provincias[13]) || (codigopostal == codigos[14] && localizacion == provincias[14]) || (codigopostal == codigos[15] && localizacion == provincias[15]) || (codigopostal == codigos[16] && localizacion == provincias[16]) || (codigopostal == codigos[17] && localizacion == provincias[17]) || (codigopostal == codigos[18] && localizacion == provincias[18]) || (codigopostal == codigos[19] && localizacion == provincias[19]) || (codigopostal == codigos[20] && localizacion == provincias[20]) || (codigopostal == codigos[21] && localizacion == provincias[21]) || (codigopostal == codigos[21] && localizacion == provincias[21]) || (codigopostal == codigos[22] && localizacion == provincias[22]) || (codigopostal == codigos[23] && localizacion == provincias[23]) || (codigopostal == codigos[24] && localizacion == provincias[24]) || (codigopostal == codigos[25] && localizacion == provincias[25]) || (codigopostal == codigos[26] && localizacion == provincias[26]) || (codigopostal == codigos[27] && localizacion == provincias[27]) || (codigopostal == codigos[28] && localizacion == provincias[28]) || (codigopostal == codigos[29] && localizacion == provincias[29]) || (codigopostal == codigos[30] && localizacion == provincias[30]) || (codigopostal == codigos[31] && localizacion == provincias[31]) || (codigopostal == codigos[32] && localizacion == provincias[32]) || (codigopostal == codigos[33] && localizacion == provincias[33]) || (codigopostal == codigos[34] && localizacion == provincias[34]) || (codigopostal == codigos[35] && localizacion == provincias[35]) || (codigopostal == codigos[36] && localizacion == provincias[36]) || (codigopostal == codigos[37] && localizacion == provincias[37]) || (codigopostal == codigos[38] && localizacion == provincias[38]) || (codigopostal == codigos[39] && localizacion == provincias[39]) || (codigopostal == codigos[40] && localizacion == provincias[40]) || (codigopostal == codigos[41] && localizacion == provincias[41]) || (codigopostal == codigos[42] && localizacion == provincias[42]) || (codigopostal == codigos[43] && localizacion == provincias[43]) || (codigopostal == codigos[44] && localizacion == provincias[44]) || (codigopostal == codigos[45] && localizacion == provincias[45])|| (codigopostal == codigos[46] && localizacion == provincias[46]) || (codigopostal == codigos[47] && localizacion == provincias[47]) || (codigopostal == codigos[48] && localizacion == provincias[48]) || (codigopostal == codigos[49] && localizacion == provincias[49]) || (codigopostal == codigos[50] && localizacion == provincias[50])|| (codigopostal == codigos[51] && localizacion == provincias[51])){
            swal("El código postal corresponde con la localidad", {
            icon: 'success'
            });
            var verde = document.getElementById("verde");
            verde.textContent = "El código postal y la localidad son correctos";
            verde.style.border = '4px dotted green';
            verde.style.margin = '8px';
            verde.style.padding = '8px';
    } else {
        swal("El código postal no corresponde con la localidad. Revise sus datos teniendo en cuenta que las localidades van sin acentos y sin eñes (Ejemplo: La Corunya).", {
            icon: 'error',
        });
        var rojo = document.getElementById("rojo");
        rojo.textContent = "El código postal o la localidad son incorrectos. Revise sus datos teniendo en cuenta que las localidades van sin acentos y sin eñes (Ejemplo: La Corunya).";
        rojo.style.border = '4px dotted red';
        rojo.style.margin = '8px';
        rojo.style.padding = '8px';
        
    }
}
