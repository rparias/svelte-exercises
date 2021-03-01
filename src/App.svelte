<script lang="ts">
  import ContactCard from './ContactCard.svelte';

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

  const handleInput = (event: any) => {
    name = event.target.value;
  };
</script>

<main>
  <h1>Hello {uppercaseName}!</h1>
  <h2>My age is {age}</h2>
  <button on:click={increaseAge}>Increase age</button>
  <button on:click={changeName}>Change name</button>
  <!-- Uni-directional binding -->
  <!-- <input
    type="text"
    placeholder="Your name"
    value={name}
    on:input={handleInput}
  /> -->

  <!-- Two-way binding shortcut -->
  <input type="text" placeholder="Your name" bind:value={name} />

  <ContactCard userName={name} />
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
