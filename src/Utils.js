import days from './json/calendario.json'

export const formatJson = () => {

    var anioActual = JSON.stringify(days.datos[1].fecha).substring(0, 4);

	let array1 = days.datos.filter(item => JSON.stringify(item.fecha).substring(4, 6) === "01" && JSON.stringify(item.fecha).substring(0, 4) !== anioActual)
    let array2 = days.datos.filter(item => JSON.stringify(item.fecha).substring(4, 6) === "02")
    let array3 = days.datos.filter(item => JSON.stringify(item.fecha).substring(4, 6) === "03")
    let array4 = days.datos.filter(item => JSON.stringify(item.fecha).substring(4, 6) === "04")
    let array5 = days.datos.filter(item => JSON.stringify(item.fecha).substring(4, 6) === "05")
    let array6 = days.datos.filter(item => JSON.stringify(item.fecha).substring(4, 6) === "06")
    let array7 = days.datos.filter(item => JSON.stringify(item.fecha).substring(4, 6) === "07")
    let array8 = days.datos.filter(item => JSON.stringify(item.fecha).substring(4, 6) === "08")
    let array9 = days.datos.filter(item => JSON.stringify(item.fecha).substring(4, 6) === "09")
    let array10 = days.datos.filter(item => JSON.stringify(item.fecha).substring(4, 6) === "10")
    let array11 = days.datos.filter(item => JSON.stringify(item.fecha).substring(4, 6) === "11")
    let array12 = days.datos.filter(item => JSON.stringify(item.fecha).substring(4, 6) === "12")

	return [array1, array2, array3, array4, array5, array6, array7, array8, array9, array10, array11, array12];
    
};

export const monthsShare = () => {
    return {"1":"Enero", "2":"Febrero", "3":"Marzo", "4":"Abril", "5":"Mayo", "6":"Junio", "7":"Julio", "8":"Agosto","9":"Septiembre","10":"Octubre","11":"Noviembre","12":"Diciembre"};
};