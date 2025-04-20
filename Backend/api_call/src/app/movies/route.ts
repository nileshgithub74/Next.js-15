
// import { movies} from "./db";

// const GET =  async() => {
//   return  Response.json(movies);
// }
// export default GET;



import { movies } from './db'; 

export async function POST(req: Request) {
  const newMovie = await req.json();

  movies.push(newMovie);

  return new Response(JSON.stringify(movies), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
