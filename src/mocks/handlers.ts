// src/mocks/handlers.js
import { rest } from 'msw';
import notesData from './data/notes.json';

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(notesData)
    )
  })
]