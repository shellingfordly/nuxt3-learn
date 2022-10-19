export default defineEventHandler((event) => ({
  name: "tom",
  age: 10,
  params: useQuery(event),
}));
