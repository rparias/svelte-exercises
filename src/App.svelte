<script lang="ts">
  export let name: string = 'Ronald';
  let age: number = 1;

  $: uppercaseName = name.toUpperCase();

  $: if (name === 'Paul') {
    console.log('It runs!');
  }

  const increaseAge = () => {
    age += 1;
  };

  const changeName = () => {
    name = 'Paul';
  };
</script>

<main>
  <h1>Hello {uppercaseName}!</h1>
  <h2>My age is {age}</h2>
  <button on:click={increaseAge}>Increase age</button>
  <button on:click={changeName}>Change name</button>
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
