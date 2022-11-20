function verificar(){

       ///Pega o valor das datas selecionadas
        var data = String(document.getElementById("data").value)
        var data2 = String(document.getElementById("data2").value)
        
        var res = document.getElementById("res")

        //Seleciona os ultimos dois números da data
        var d= data.slice(data.length - 2);
        var d2= data2.slice(data2.length - 2);

        var td= document.getElementsByTagName("td")
       
        //Altera a cor no calendário dos dias selecionados
        for (var c=1; c<td.length; c++){
            
            if (d==c){
                td[c-(-2)].style.background += '#8B008B'
            }
           if (d2==c){
                td[c-(-2)].style.background += '#8B008B'
          }
            
        }

        var qtd = 0;
        // Altera a cor no calendario entre das datas selecionas
        for (var i=d; i<d2; i++){
           qtd++
            for (var c=1; c<td.length; c++){
               
            td[i-(-2)].style.background+= "#DDA0DD"
            }

        }
        //Mostra a quantidade de dias entre as datas selecionadas
        res.innerHTML+=`Entre o dia ${d} e dia ${d2}, tem ${qtd} dias` 
        
    }