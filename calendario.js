function Calcular(){

    //utilizamos el parseFloat ya que esta recibiendo como texto
    
    let Dia = parseInt( document.getElementById('Dia').value);
    let Mes = parseInt( document.getElementById('Mes').value);
    let Año = parseInt( document.getElementById('Anio').value);
    
    const F = new Date(Año, Mes - 1, Dia);
    let fecha = F.getDay();
    let diaDeLaSemana;

    switch (fecha) {
        case 0:
            diaDeLaSemana =  "Domingo No es dia laborable";
            break;
            case 1:
                diaDeLaSemana =  "Lunes No es dia laborable";
                break;
        
                case 2:
            diaDeLaSemana =  "Martes No es dia laborable";
            break;
        
            case 3:
            diaDeLaSemana =  "Miercoles No es dia laborable";
            break;
        
            case 4:
            diaDeLaSemana =  "Jueves No es dia laborable";
            break;
        
            case 5:
            diaDeLaSemana =  "Viernes No es dia laborable";
            break;
        
            case 6:
            diaDeLaSemana =  "Sabado No es dia laborable";
            break;
    }


    
    document.getElementById('resultadoD').value = diaDeLaSemana;
}