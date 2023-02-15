$(document).ready(function() {
    // Código a ejecutar cuando se haya cargado
    // el árbol DOM del documento.
    var referencia;
    for (referencia in accesorios) {
        var accesorio = accesorios[referencia];
        //console.log($("select[id='accesorios'").val());
        console.log(accesorio.etiqueta);
        console.log(referencia);
        
        var line = accesorio.etiqueta + " ("+ accesorio.precio.toFixed(2) + "€)";
        var optn = $('<option>').text(line).attr("value",referencia);
        $("#accesorios").append(optn);        
    }

    $("#boton").click(function() {
        // Código a ejecutar cuando el usuario haga click
        // sobre el elemento #boton.
        console.log("He clickado el boton de compra");
        console.log($("#accesorios").val());
        console.log(accesorios[$("#accesorios").val()]);

        
        console.log($("#accesorios").val());
        var ref = $("#accesorios").val();


        if( $("#accesorios").val() == $("#"+ ref).attr("id") ){
            console.log("encontrado");
            console.log($("#"+ref+".cantidad").val());
            //console.log(document.getElementById(ref).getElementsByClassName('cantidad'));
            console.log($("td."+ref+".cantidad").val());
            //console.log(parseFloat($("#"+ref).text($('#cantidad').val())+ parseFloat( $("#"+ref+".cantidad").text())));
            var cantidad_ini = parseInt($(".cantidad").text());
            var cantidad_total = parseInt($('#cantidad').val()) + parseInt(cantidad_ini);
            console.log(cantidad_total);
            $(".cantidad").text(cantidad_total);
            //cantidad_total=0;
        }else{
            var nombre = $('<td>').text(accesorios[$("#accesorios").val()].etiqueta);
            var cantidad = $('<td>').text($('#cantidad').val()).attr("class", "cantidad");
            var precio = $('<td>').text((accesorios[$("#accesorios").val()].precio.toFixed(2)*parseFloat($('#cantidad').val())).toFixed(2));

            var tr = $('<tr>').append(nombre).append(cantidad).append(precio).attr("id", $("#accesorios").val());
        }


        $("#total").before(tr); 
        
        // Calcular el precio total:
        var total = parseFloat($('#totalval').text());
        var precio = accesorios[$("#accesorios").val()].precio.toFixed(2)*parseFloat($('#cantidad').val()).toFixed(2)
        $('#totalval').text((total + precio).toFixed(2));
        //console.log(total + precio);


      });

      $("#accesorios").change(function() {
        // Código a ejecutar cuando cambie el valor del control.
        $('#cantidad').val(1);
      });
      
}
  
  
  );