// const handlers = [
//     // Define your request handlers directly without rest.post
//     (req, res, ctx) => {
//       if (req.method === 'POST' && req.url.pathname === '/your/api/endpoint') {
//         console.log('Intercepted POST request');
//         return res(
//           ctx.json({ message: 'Mocked response' })
//         );
//       }
//     }
//   ];
  
//   export { handlers };



import { http, HttpResponse } from "msw";

export const handlers = [
  http.post("https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com", () => {
    console.log("handlers");
    return HttpResponse.json({
      when: "2024-05-30T10:35",
      lanes: "1",
      people: "2",
      shoes: ["20", "30"],
      price: 340,
      id: "STR3203CZTN",
      active: true,
    });
  }),
];