var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [45.5, 35.5, 34.0, 24, 45];
var barColors = ["green","yellow","light-blue","pink","orange"];

new Chart("myChart", 
{
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: 
  {
    title: 
    {
      display: true,
      text: "World Wide Wine Production 2021"
    }
  }
});