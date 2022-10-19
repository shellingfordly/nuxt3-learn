<script setup lang="ts">
const count = ref(1);

const { data } = await useFetch(() => `/api/hello/${count.value}`, {
  params: { token: 123 },
});

const { data: submit } = await useFetch(() => "/api/submit", {
  method: "get",
  params: {
    name: "tom",
    age: 10,
  },
  query: {
    test: "xx",
  },
});

const { data: submit_post } = await useFetch(() => "/api/submit", {
  method: "post",
  params: {
    name: "tina",
    age: 19,
  },
  query: {
    test: "xxdads",
  },
});
</script>

<template>
  <div>index</div>
  <NuxtLink to="/home">home</NuxtLink>

  <div>
    Fetch result:
    <pre class="text-left"><code>{{ data }}</code></pre>
    <button @click="count++">+</button>
  </div>

  <div>{{ submit }}</div>
  <div>{{ submit_post }}</div>
</template>
