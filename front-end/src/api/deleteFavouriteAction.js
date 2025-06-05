import { BACK_END_URL } from "../constants/api";

export async function deleteFavouriteAction({ params }) {
  await fetch(`${BACK_END_URL}/favourites/${params.favouriteId}`, {
    method: "DELETE",
  });
  return null; 
}
