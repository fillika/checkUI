<script>
  import { stats } from "../../stores/stats";
</script>

<div class="statistic-billboard">
  <div class="total">Total: {$stats.total}</div>
  <div class="success">Success: {$stats.passed}</div>
  <div class="fail">Failed: {$stats.failed}</div>
</div>

<style>
  .statistic-billboard {
    background-color: #d7d7f7;
    padding: 8px;
    font-size: 24px;
  }

  .statistic-billboard .success {
    color: green;
  }

  .statistic-billboard .fail {
    color: #fd3333;
  }
</style>
