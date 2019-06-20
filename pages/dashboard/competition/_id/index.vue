<template>
  <div class="col-md-12">
    <div class="row">
      <Chart class="col-md" height="80px" :data="data" :options="options"/>
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
            label: "Registered",
            backgroundColor: "green",
            data: [40, 39, 10, 40, 39, 80, 40]
          },
          {
            label: "Slot Available",
            backgroundColor: "red",
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
