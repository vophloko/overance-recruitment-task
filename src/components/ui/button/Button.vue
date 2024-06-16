<template>
  <button class="button" type="button">
    <slot />
  </button>
</template>

<style scoped>
.button {
  border: unset;
  padding: 0.75rem 1.5rem;
  background-color: hsl(240, 100%, 50%);
  color: white;
  border-radius: 0.5em;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 150ms ease-in-out;

  &:hover {
    background-color: hsl(240, 100%, 25%);
  }

  &:disabled {
    background-color: hsl(240, 100%, 80%);
    cursor: default;
  }
}
</style>
