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

        // Comprobamos si el valor del accesorio a añadir está ya en la lista de la compra:
        if( $("#accesorios").val() == $("#"+ ref).attr("id") ){ 
            console.log("encontrado");
            // * OTRA FORMA QUE QUIERO PROBAR: *
                // Con esta manera me ahorro crearle un id a cantidad (en el else)
                // var tr = $("#"+ ref);
                // console.log(tr);
                // var tdCantidad = tr.find("td:nth-child(2)").text(); // esto me devuelve la cantidad tb
                // console.log(tdCantidad);
                // console.log($("#cantidad_"+ref).text());
            
            var cantidad_ini = parseInt($("#cantidad_"+ref).text()); // buscamos la cantidad inicial que hay en la tabla
            
            var cantidad_total = parseInt($('#cantidad').val()) + cantidad_ini; // sumamos la cantidad inicial a la del valor del artículo seleccionado
            console.log(cantidad_total);
            
            $("#cantidad_"+ref).text(cantidad_total); // asignamos la cantidad total
           
        }else{
            var nombre = $('<td>').text(accesorios[$("#accesorios").val()].etiqueta);
            var cantidad = $('<td>').text($('#cantidad').val()).attr("id", "cantidad_"+ref); // le añadimos el atributo id para poder seleccionarlo
            var precio = $('<td>').text((accesorios[$("#accesorios").val()].precio.toFixed(2)*parseFloat($('#cantidad').val())).toFixed(2));

            var tr = $('<tr>').append(nombre).append(cantidad).append(precio).attr("id", $("#accesorios").val());
            $("#total").before(tr); 
        }        
        
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