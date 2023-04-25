<script>
  export let isDisabled;
  export let runTests;
  export let clearAll;
</script>

<div class="start-button-wrapper">
  <button
    on:mousedown={runTests}
    disabled={isDisabled}
    class="button start-button"
    id="start-button">Запуск тестов</button
  >

  <button on:mousedown={clearAll} class="button clear-button" id="clear-button"
    >Очистить все</button
  >
</div>

<style>
  .start-button-wrapper {
    margin-bottom: 10px;
    display: flex;
  }

  .button {
    padding: 10px 10px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    margin-right: 10px;
  }

  .start-button {
    background-color: #5baaf5;
  }

  .clear-button {
    background-color: #f55b5b;
  }

  .start-button:disabled {
    background-color: gray;
    opacity: 0.5;
  }
</style>
