// Atributos categoricos o cuantitativos 
/*
d3.csv('astronautas.csv', d3.autoType).then(data => {
    console.log(data)
    // Logueamos la data
    // Guardamos el svg generado en la variable chart
    let chart = Plot.plot({  // Genera una visualizacion, un elemento vectorial para la web, lo que hacemos es guardar el grafico en la variable chart 
      marginLeft : 50,
      marginRight: 100, 
      height: 300,
      width: 900, 
    
      marks: [
        Plot.barY(data, 
          Plot.groupX({y: "mean"}, {x: "ocupacion", y: 'mision_hs', fill: "silver"}), 
        ),

        Plot.barY(data, 
          Plot.groupX({y: "sum"}, {x: "ocupacion", y: 'eva_mision_hs', fill: "orange"}),   // Personalizamos las barras
        ),
      ], 
      y: {
        //tickFormat: d3.format('.0f'),
        label: "Horas de mision",
        grid: true, 
      },
      x: {
        //tickFormat: d3.format('.0f'),
        label: null,
        nice:true, 
      },
      
     
     
      
    })
    alpha = Plot.legend({
      color: {
        domain: ["Promedio horas de mision", "Horas eva de mision totales"],
        range: ["silver", "Orange"]
      },
      legend: "swatches",
      className: "alphabet",
      swatchSize: 20,
      style: {
        fontFamily: "",
        fontSize: "15px"
      }
    })
    // Agregamos dinamicamente la visualizacion al gráfico
    // Agregamos chart al div#chart de index.html
    d3.select('#chart').append(() => chart)
    d3.select('#chart').append(() => alpha)
  })

*/
d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  
  // Logueamos la data
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({  // Genera una visualizacion, un elemento vectorial para la web, lo que hacemos es guardar el grafico en la variable chart 
    marginLeft : 50,
    marginRight: 100, 
    height: 500,
    width: 900, 
  
    marks: [
      Plot.frame(),
      Plot.barY(data, 
        Plot.groupX({y: "sum"}, {x: "nacionalidad", y: 'mision_hs', fill: "silver"}), 
      ),
    ], 
    y: {
      //tickFormat: d3.format('.0f'),
      label: "Horas de mision",
      grid: true, 
      domain: [0, 220000],
    },
    x: {
      //tickFormat: d3.format('.0f'),
      label: null,
      nice:true, 
      domain: ["U.S.S.R/Rusia", "EE.UU.", "Japon", "Italia", "Canada", "Alemania", "Francia", "Reino Unido","China", "Países Bajos", "Dinamarca", "Kazajstán", "Emiratos Arabes Unidos"],
      
      tickFormat: d => {
        if (d == "Emiratos Arabes Unidos") {
          return "UEA";
        } 
        if (d == "U.S.S.R/Rusia"){
          return "Rusia";
        }
        if (d == "Reino Unido"){
          return "UK";
        }
        else {
          return d;
        }
      }
    },    
  })

  // Agregamos dinamicamente la visualizacion al gráfico
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart)
  
})

