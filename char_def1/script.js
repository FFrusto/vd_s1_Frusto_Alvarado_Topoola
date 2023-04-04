
d3.csv('astronautas2.csv', d3.autoType).then(data => {
    console.log(data)
    // Logueamos la data
    // Guardamos el svg generado en la variable chart
    let chart = Plot.plot({  // Genera una visualizacion, un elemento vectorial para la web, lo que hacemos es guardar el grafico en la variable chart 
        marks: [
          Plot.frame(),
          Plot.line(data, {
            x: 'anio',
            y :'mision_hs',
            z: 'nacionalidad',
            stroke:'nacionalidad',
            legend: true, 
            strokeWidth: 2
      }),
      
    ],

    color: {
      range: ["silver", "Orange"]
    },
  
    marginLeft: 50,
    marginRight: 50, 
    xlabeloffset: 20, 
    ylabeloffset: 20,
    
    x: {
      tickFormat: d3.format('.0f'),
      label: "Año de misión",
    },
    y: {
      label: "Horas de mision",
      domain: [0, 35000],
    },
    

    })
    alpha = Plot.legend({
      color: {
        domain: ["Promedio horas de mision de EE.UU. y Rusia ", "Promedio horas de mision del resto del mundo"],
        range: ["orange", "silver"]
      },
      legend: "swatches",
      className: "alphabet",
      swatchSize: 20,
      style: {
        fontFamily: "",
        fontSize: "15px"
      }
    })

    d3.select('#chart').append(() => chart)
    d3.select('#chart').append(() => alpha)
  
  })


 



  