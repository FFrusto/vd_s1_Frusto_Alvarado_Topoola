d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)

  // Agrupar los datos por país y ocupación y calcular la cantidad de astronautas por grupo
  let groupedData = d3.group(data, d => d.nacionalidad, d => d.ocupacion);
  let counts = Array.from(groupedData, ([, group]) => Array.from(group, ([, subGroup]) => subGroup.length));
  let maxCount = d3.max(counts.flat());

  // Escala de tamaño para los círculos
  let rScale = d3.scaleLinear()
    .domain([0, maxCount])
    .range([2, 12]);

  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({
    
    marginRight:0,
    marginLeft:200,
    marks: [
      Plot.dot(data, {
        x: 'nacionalidad',
        y: 'ocupacion',
        r: d => rScale(groupedData.get(d.nacionalidad)?.get(d.ocupacion)?.length || 0),
        fill: 'ocupacion'
      }),
    ],
    height: 500,
    width: 800,
    marginBottom: 60,
    marginTop: 50,
    grid: true,
    line: true,
    nice: true,
    x: {
      label: "Nacionalidades",
      tickRotate: 0,
      tickFormat: d => {
        switch (d) {
          case 'Alemania':
            return 'DE';
          case 'Canada':
            return 'CA';
          case 'China':
            return 'CN';
          case 'Dinamarca':
            return 'DK';
          case 'EE.UU.':
            return 'EEUU';
          case 'Emiratos Arabes Unidos':
            return 'AE';
          case 'Francia':
            return 'FR';
          case 'Italia':
            return 'IT';
          case 'Japon':
            return 'JP';
          case 'Kazajistan':
            return 'KZ';
          case 'Paises Bajos':
            return 'NL';
          case 'Reino Unido':
            return 'UK';
          case 'U.S.S.R/Rusia':
            return 'RU';
          default:
            return d;
        }
      }
    },
    y: {
      label: "Ocupacion",
      tickRotate: 0,
      tickFormat: d => {
        switch (d) {
          case 'comandante':
            return 'Comandante';
          case 'especialista aeroespacial':
            return 'Especialista Aeroespacial';
          case 'ingeniero aeroespacial':
            return 'Ingeniero Aeroespacial';
          case 'participante de vuelo espacial':
            return 'Participante de vuelo espacial';
          case 'piloto':
            return 'Piloto';
          default:
            return d;
        }
      }
    },
  })

  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart)
});