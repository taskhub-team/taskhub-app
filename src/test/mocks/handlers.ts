// import { http, HttpResponse } from 'msw';

// // Define your mock API handlers for tests only
// export const handlers = [
//   // Example: Mock login response
//   http.post('http://localhost:4000/api/auth/login', async ({ request }) => {
//     const { username, password } = await request.json();

//     if (username === 'testuser' && password === 'password') {
//       return HttpResponse.json({
//         id: 1,
//         username: 'testuser',
//         email: 'test@example.com',
//         firstName: 'Test',
//         lastName: 'User',
//         token: 'mock-jwt-token',
//       });
//     }

//     return new HttpResponse(null, {
//       status: 401,
//       statusText: 'Unauthorized',
//     });
//   }),

//   // Example: Mock current user response
//   http.get('http://localhost:4000/api/auth/me', () => {
//     return HttpResponse.json({
//       id: 1,
//       username: 'testuser',
//       email: 'test@example.com',
//       firstName: 'Test',
//       lastName: 'User',
//     });
//   }),

//   // Example: Mock todos list
//   http.get('http://localhost:4000/api/todos', () => {
//     return HttpResponse.json({
//       todos: [
//         { id: 1, title: 'Learn Vitest', completed: false },
//         { id: 2, title: 'Learn MSW', completed: true },
//         { id: 3, title: 'Build TaskHub', completed: false },
//       ],
//       total: 3,
//       skip: 0,
//       limit: 10,
//     });
//   }),
// ];
