<template>
  <div class="col-md-12">
    <div class="row">
      <Chart class="col-md" :data="data" :options="options"/>
    </div>
  </div>
</template>



<script>
import Chart from "~/components/Chart";
export default {
  data() {
    return {
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [40, 39, 10, 40, 39, 80, 40]
          },
          {
            label: "Data Two",
            backgroundColor: "#fFF000",
            data: [20, 39, 10, 40, 39, 80, 40]
          }
        ]
      },
  options: {
    scales: {
      xAxes: [
        {
          stacked: true
        }
      ],
      yAxes: [
        {
          stacked: true,
        }
      ]
    }
  },
    }
  },
  mounted() {},
  components: {
    Chart
  }
};
</script>

<style>
</style>
