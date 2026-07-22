function myOnLoad() 
{
  if(document.getElementById("formFactura"))
  {
    //Codigo a Ejecutar al Cargar la Pagina
    traerUsoCfdi();
    traerRegimenFiscal(e=>{
      valorRegimen = document.getElementById("regimenSelected").value;
      document.getElementById("regimenFiscal").value = valorRegimen;
    });

  }
  else
  {
    init();
    setTimeout('history.back()',5000);
  }
}

// Función que pinta el select de Régimen fiscal
function traerUsoCfdi()
{
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', 'usoCfdi.json', true);
  xhttp.send();

  xhttp.onreadystatechange = function()
  {
    if(this.readyState==4 && this.status==200)
    {
      var listaUsoCfdi = JSON.parse(this.responseText);
      var usoCfdi = document.getElementById("usoCfdi")

      for(let item of listaUsoCfdi)
      {
        var option = document.createElement("option");
        option.text = item.valor;
        option.value = item.clave;
        usoCfdi.add(option);
      }
    }
  }
}

// Función que pinta el select de Régimen fiscal
function traerRegimenFiscal(d)
{
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', 'regimenFiscal.json', true);
  xhttp.send();

  xhttp.onreadystatechange = function()
  {
    if(this.readyState==4 && this.status==200)
    {
      var listaRegimenFiscales = JSON.parse(this.responseText);
      var regimenFiscal = document.getElementById("regimenFiscal")

      for(let item of listaRegimenFiscales)
      {
        var option = document.createElement("option");
        option.text = item.valor;
        option.value = item.clave;
        regimenFiscal.add(option);
      }
      d();
    }
  }
}

// Función que carga las imagenes de mensajes de error o succes
function init() {
  var imgDefer = document.getElementsByTagName('img');
  for (var i = 0; i < imgDefer.length; i++) 
  {
    if(imgDefer[i].getAttribute('datasrc')) 
    {
        imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('datasrc'));
    }
  }
}