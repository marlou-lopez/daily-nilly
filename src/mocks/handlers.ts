// src/mocks/handlers.js
import { rest } from 'msw';

export const handlers = [
  rest.get('/posts', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          title: "SampleTitle01",
          body: "SampleBody01"
        },
        {
          id: 2,
          title: "SampleTitle01",
          body: "SampleBody01"
        },
        {
          id: 3,
          title: "SampleTitle01",
          body: "SampleBody01"
        },
        {
          id: 4,
          title: "SampleTitle01",
          body: "SampleBody01"
        },
        {
          id: 5,
          title: "SampleTitle01",
          body: "SampleBody01"
        }
      ])
    )
  })
]