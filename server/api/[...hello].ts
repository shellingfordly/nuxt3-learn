export default defineEventHandler((event) => ({
  path: "/api/" + event.context.params.hello,
  data: "1",
  query: useQuery(event),
}));
