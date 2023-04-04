// Atributos categoricos o cuantitativos 

d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  
  // Definimos una escala ordinal para asignar colores a cada valor de la variable "genero"
  let chart = Plot.plot({
    marginRight: 100,
    marginLeft: 50,
    x: {
      grid:true, 
      label : "Frecuencia",
      domain: [0, 60],
      
    },
    fy: {
      domain: ["EE.UU.", "U.S.S.R/Rusia", "China", "Japon",  "Italia", "Reino Unido", "Canada", "Alemania", "Dinamarca", "Kazajistan", "Francia", "Emiratos Arabes Unidos"  ], 
      tickFormat: d => {
        if (d == "Emiratos Arabes Unidos") {
          return "UEA";
        } 
        if (d == "U.S.S.R/Rusia"){
          return "Rusia";
        }
        else {
          return d;
        }
      }
    },
    y: {
      tickFormat: d => d == "masculino" ? 'M' : 'F',
      label: "Genero", 
       
      
    }, 
    facet: {
      data: data,
      y: "nacionalidad",  
    },
    color:{
      range: ["silver", "orange"]
    },
    
    marks: [
      Plot.frame(),
      Plot.barX(data, 
        Plot.groupY({x: "count"}, {y: "genero", fill: "genero"},),
        ),

      Plot.text(data, 
        {x: "count", y: "genero", text: d => d.count, dx:5},
      ), 
      Plot.ruleX([0]),
    ], 
   

  })
  
  d3.select('#chart').append(() => chart)

})