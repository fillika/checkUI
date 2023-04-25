<script>
  import GroupResult from "../results/GroupResult.svelte";

  let isDisabled = false;
  let total = 0;
  let success = 0;
  let fail = 0;
  let results = [];

  function mapResults(results) {
    const m = new Map();

    results.forEach(({ value }) => {
      const { name, result } = value;
      let gName = value.groupName;

      if (gName === null) {
        gName = "no-group";
      }

      if (m.has(gName)) {
        const arr = m.get(gName);
        arr.push({ name, result });
        m.set(gName, arr);
      } else {
        m.set(gName, [{ name, result }]);
      }
    });

    return m;
  }

  function runTests() {
    console.clear();
    isDisabled = true;
    // @ts-ignore
    const { StateManager } = window;

    const testIDs = [];
    const promises = StateManager.runTests(testIDs);

    Promise.allSettled(promises).then((res) => {
      results = [...mapResults(res).entries()];

      const { tests } = StateManager.getReport();

      total = tests.total;
      success = tests.success;
      fail = tests.fail;

      isDisabled = false;
    });
  }
</script>

<div class="panel" id="panel">
  <div class="start-button-wrapper">
    <button
      on:mousedown={runTests}
      disabled={isDisabled}
      class="start-button"
      id="start-button">Запуск тестов</button
    >
  </div>
  <div id="report">
    <div class="statistic-billboard">
      <div class="total">Total: {total}</div>
      <div class="success">Success: {success}</div>
      <div class="fail">Failed: {fail}</div>
    </div>
  </div>
</div>

{#each results as [groupName, childrens]}
  <GroupResult results={childrens} {groupName} />
{/each}

<style>
  .panel {
    padding: 10px;
  }
  .start-button-wrapper {
    margin-bottom: 10px;
  }

  .start-button {
    background-color: #5baaf5;
    padding: 10px 10px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
  }

  .start-button:disabled {
    background-color: gray;
    opacity: 0.5;
  }

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
