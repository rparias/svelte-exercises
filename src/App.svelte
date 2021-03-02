<script lang="ts">
  import ContactCard from './ContactCard.svelte';
  import type { AppProps } from './DTO/AppProps';

  export let props: AppProps = {
    name: '',
    jobTitle: '',
    jobDescription: '',
    image: '',
    done: false,
  };
  let age: number = 1;

  $: uppercaseName = props.name.toUpperCase();

  $: magicProperty = props.name === 'Magic Ron' && 'magic-color';

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

  const handleClick = () => {
    props.done =
      props.name.trim().length > 0 &&
      props.jobTitle.trim().length > 0 &&
      props.jobTitle.trim().length > 0 &&
      props.image.trim().length > 0;
  };
</script>

<main>
  <h1 class={magicProperty}>Hello {uppercaseName || 'friend'}!</h1>
  <h2>My age is {age}</h2>
  <button on:click={increaseAge}>Increase age</button>
  <button on:click={changeName}>Change name</button>
  <label for="name">Name</label>
  <input
    id="name"
    type="text"
    name="name"
    placeholder="Your name"
    value={props.name}
    on:input={handleInput}
  />
  <label for="jobTitle">Job title</label>
  <input
    id="jobTitle"
    type="text"
    name="jobTitle"
    placeholder="Input the job title"
    value={props.jobTitle}
    on:input={handleInput}
  />
  <label for="jobDescription">Job Description</label>
  <input
    id="jobDescription"
    type="text"
    name="jobDescription"
    placeholder="Input the job description"
    value={props.jobDescription}
    on:input={handleInput}
  />
  <label for="image">Image URL</label>
  <input
    id="image"
    type="text"
    name="image"
    placeholder="URL"
    value={props.image}
    on:input={handleInput}
  />
  <button on:click={handleClick}>Continue</button>

  {#if props.done}
    <ContactCard
      userName={props.name}
      jobTitle={props.jobTitle}
      jobDescription={props.jobDescription}
      imageUrl={props.image}
    />
  {:else}
    <p>Please fill the above form</p>
  {/if}
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

  .magic-color {
    color: #3498db;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
