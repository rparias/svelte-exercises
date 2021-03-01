<script lang="ts">
  export let name: string;
  let age: number = 1;
  const increaseAge = () => {
    age += 1;
  };
</script>

<main>
  <h1>Hello {name}!</h1>
  <h2>My age is {age}</h2>
  <button on:click={increaseAge}>Increase age</button>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
