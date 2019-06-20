
<script>
import { Bar } from 'vue-chartjs'
import ChartDataLabels from 'chartjs-plugin-datalabels';
export default {
  extends: Bar,
  props: ['data','options'],
  mounted() {
    this.options.plugins = {
      dataLabels: {
        color: 'black'
      }
    }
    this.renderChart(this.data,this.options);
  }
};
</script>

<style>
</style>
