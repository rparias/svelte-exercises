<script lang="ts">
  import ContactCard from './ContactCard.svelte';

  interface AppProps {
    name?: string;
    jobDescription?: string;
    image?: string;
  }

  export let props: AppProps = {
    name: '',
    jobDescription: '',
    image: '',
  };
  let age: number = 1;

  $: uppercaseName = props.name.toUpperCase();

  $: if (props.name === 'Paul') {
    console.log('It runs!');
  }

  const increaseAge = () => {
    age += 1;
  };

  const changeName = () => {
    props.name = 'Paul';
  };

  const handleInput = (event: any) => {
    const { name, value } = event.target;
    props[name] = value;
  };
</script>

<main>
  <h1>Hello {uppercaseName || 'friend'}!</h1>
  <h2>My age is {age}</h2>
  <button on:click={increaseAge}>Increase age</button>
  <button on:click={changeName}>Change name</button>
  <label>Name</label>
  <!-- Uni-directional binding -->
  <input
    type="text"
    name="name"
    placeholder="Your name"
    value={props.name}
    on:input={handleInput}
  />
  <!-- Two-way binding shortcut -->
  <!-- <input type="text" placeholder="Your name" bind:value={name} /> -->
  <label>Job Description</label>
  <input
    type="text"
    name="jobDescription"
    placeholder="Input the job description"
    value={props.jobDescription}
    on:input={handleInput}
  />

  <ContactCard userName={props.name} jobDescription={props.jobDescription} />
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
