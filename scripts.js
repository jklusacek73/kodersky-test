// JavaScript Document

// Plugin pro vytvarování grafu borderRadius
  (function(factory) {
    if (typeof module === 'object' && module.exports) {
      module.exports = factory;
    } else {
      factory(Highcharts);
    }
  }(function(Highcharts) {
    (function(H) {
      H.wrap(H.seriesTypes.column.prototype, 'translate', function(proceed) {
        const options = this.options;
        const topMargin = options.topMargin || 0;
        const bottomMargin = options.bottomMargin || 0;

        proceed.call(this);

        H.each(this.points, function(point) {
          if (options.borderRadiusTopLeft || options.borderRadiusTopRight || options.borderRadiusBottomRight || options.borderRadiusBottomLeft) {
            const w = point.shapeArgs.width;
            const h = point.shapeArgs.height;
            const x = point.shapeArgs.x;
            const y = point.shapeArgs.y;

            let radiusTopLeft = H.relativeLength(options.borderRadiusTopLeft || 0, w);
            let radiusTopRight = H.relativeLength(options.borderRadiusTopRight || 0, w);
            let radiusBottomRight = H.relativeLength(options.borderRadiusBottomRight || 0, w);
            let radiusBottomLeft = H.relativeLength(options.borderRadiusBottomLeft || 0, w);

            const maxR = Math.min(w, h) / 2

            radiusTopLeft = radiusTopLeft > maxR ? maxR : radiusTopLeft;
            radiusTopRight = radiusTopRight > maxR ? maxR : radiusTopRight;
            radiusBottomRight = radiusBottomRight > maxR ? maxR : radiusBottomRight;
            radiusBottomLeft = radiusBottomLeft > maxR ? maxR : radiusBottomLeft;

            point.dlBox = point.shapeArgs;

            point.shapeType = 'path';
            point.shapeArgs = {
              d: [
                'M', x + radiusTopLeft, y + topMargin,
                'L', x + w - radiusTopRight, y + topMargin,
                'C', x + w - radiusTopRight / 2, y, x + w, y + radiusTopRight / 2, x + w, y + radiusTopRight,
                'L', x + w, y + h - radiusBottomRight,
                'C', x + w, y + h - radiusBottomRight / 2, x + w - radiusBottomRight / 2, y + h, x + w - radiusBottomRight, y + h + bottomMargin,
                'L', x + radiusBottomLeft, y + h + bottomMargin,
                'C', x + radiusBottomLeft / 2, y + h, x, y + h - radiusBottomLeft / 2, x, y + h - radiusBottomLeft,
                'L', x, y + radiusTopLeft,
                'C', x, y + radiusTopLeft / 2, x + radiusTopLeft / 2, y, x + radiusTopLeft, y,
                'Z'
              ]
            };
          }

        });
      });
    }(Highcharts));
  }));

// Aktualizace javascriptů při změně velikosti webové stránky  
$(window).bind('resize', function(e)
{
  console.log('window resized..');
  this.location.reload(false); 
});

$(window).bind('resize', function(e)
{
  if (window.RT) clearTimeout(window.RT);
  window.RT = setTimeout(function()
  {
    this.location.reload(false); 
  }, 200);
});

$(document).ready(function(){ 

// Rozkliknutí menu 
  $(".menu-bars").on("click", function(){
    $("nav ul").toggleClass("showing");
  });

  $("nav ul li").on("click", function(){
    $("nav ul").removeClass("showing");
  });

// Carousel  
  new flickerplate(".carousel");
  
// První graf se zaoblenými hranami  
var chart = Highcharts.chart('graph1', {
    title: {
        text: 'Pondělí',
        align: 'left',
    },
    plotOptions: {
      column: {
        grouping: false,
        borderRadiusTopLeft: 15,
        borderRadiusTopRight: 15
      }
    },
    chart:{
    	height: '280px',
      backgroundColor: '#f2f2f2',
    },
    yAxis: {
    	visible: false
    },
    responsive: {
        rules: [{
            condition: {
                maxWidth: 400
            },
            chartOptions: {
                xAxis: {
                    labels: {
                       y: 45,
                       step: 4
                    }
                },
            }
        }]
    },
    xAxis: {
        categories: ['8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'],
        labels: {
        	rotation: 90,
          align: 'right',
          y: 45,
          step: 2,
          style: {
          	color: '#000',
          }
        },
        lineWidth: 0,
        tickWidth: 0,
    },
    series: [{
    		name: "Čekání",
        type: 'column',
        pointPadding: 0,
        groupPadding: 0,
        borderWidth: 0,
        shadow: false,
        data: [ {y: 2, color: '#ffc59b'}, 
        				{y: 3.8, color: '#f88c6c'},
                {y: 4.3, color: '#f88c6c'},
                {y: 3.5, color: '#f88c6c'},
                {y: 1, color: '#ffc59b'},
                {y: 2, color: '#ffc59b'},
                {y: 3.5, color: '#f88c6c'},
                {y: 7, color: '#e64e21'},
                {y: 6, color: '#e64e21'},
                {y: 5, color: '#e64e21'},
                {y: 4, color: '#f88c6c'},
                {y: 3.8, color: '#f88c6c'},
                {y: 3.4, color: '#f88c6c'},
                {y: 1, color: '#ffc59b'},
                {y: 2, color: '#ffc59b'},
                {y: 4, color: '#f88c6c'},
                {y: 3, color: '#ffc59b'},
                {y: 7, color: '#e64e21'},
                {y: 5, color: '#e64e21'},
                {y: 5.8, color: '#e64e21'},
                {y: 6.4, color: '#e64e21'},
                {y: 4.2, color: '#f88c6c'},
                {y: 3.7, color: '#f88c6c'},
                {y: 3, color: '#ffc59b'},
                {y: 5, color: '#e64e21'},
                {y: 4.2, color: '#f88c6c'},
                {y: 3, color: '#ffc59b'},
                {y: 2, color: '#ffc59b'},
                {y: 1, color: '#ffc59b'}],
        showInLegend: false
    }],
});

// Druhý graf  
var chart2 = Highcharts.chart('graph2', {
    title: {
        text: 'Pondělí',
        align: 'left',
    },
    chart:{
    	height: '280px',
      backgroundColor: '#f2f2f2',
    },
    yAxis: {
    	visible: false
    },
    responsive: {
        rules: [{
            condition: {
                maxWidth: 400
            },
            chartOptions: {
                xAxis: {
                    labels: {
                       y: 45,
                       step: 4
                    }
                },
            }
        }]
    },
    xAxis: {
        categories: ['8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'],
        labels: {
        	rotation: 90,
          align: 'right',
          y: 45,
          step: 2,
          style: {
          	color: '#000',
          }
        },
        lineWidth: 0,
        tickWidth: 0,
    },
    series: [{
    		name: "Čekání",
        type: 'column',
        pointPadding: 0,
        groupPadding: 0,
        borderWidth: 0,
        shadow: false,
        data: [ {y: 2, color: '#ffc59b'}, 
        				{y: 3.8, color: '#f88c6c'},
                {y: 4.3, color: '#f88c6c'},
                {y: 3.5, color: '#f88c6c'},
                {y: 1, color: '#ffc59b'},
                {y: 2, color: '#ffc59b'},
                {y: 3.5, color: '#f88c6c'},
                {y: 7, color: '#e64e21'},
                {y: 6, color: '#e64e21'},
                {y: 5, color: '#e64e21'},
                {y: 4, color: '#f88c6c'},
                {y: 3.8, color: '#f88c6c'},
                {y: 3.4, color: '#f88c6c'},
                {y: 1, color: '#ffc59b'},
                {y: 2, color: '#ffc59b'},
                {y: 4, color: '#f88c6c'},
                {y: 3, color: '#ffc59b'},
                {y: 7, color: '#e64e21'},
                {y: 5, color: '#e64e21'},
                {y: 5.8, color: '#e64e21'},
                {y: 6.4, color: '#e64e21'},
                {y: 4.2, color: '#f88c6c'},
                {y: 3.7, color: '#f88c6c'},
                {y: 3, color: '#ffc59b'},
                {y: 5, color: '#e64e21'},
                {y: 4.2, color: '#f88c6c'},
                {y: 3, color: '#ffc59b'},
                {y: 2, color: '#ffc59b'},
                {y: 1, color: '#ffc59b'}],
        showInLegend: false
    }],
});
});

