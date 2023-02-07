<script>
  export let text = "";
  export let onClick = () => {};
</script>

<span class="font-bold" on:click={onClick}>{text}</span>
