import axios from "axios";
import { useCallback, useMemo } from "react"


interface IUseFavorite {
  listingId: string;
}

const useFavorite = ({ listingId}: IUseFavorite) => {

  const hasFavorited = useMemo(() => {
    // const list = currentUser?.favoriteIds || [];

    return list.includes(listingId);
  }, [ listingId]);

  const toggleFavorite = useCallback(async (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    if (!currentUser) {
      return loginModal.onOpen();
    }

    try {
      let request;

      if (hasFavorited) {
        request = () => axios.delete(`/api/favorites/${listingId}`);
      } else {
        request = () => axios.post(`/api/favorites/${listingId}`);
      }

      await request();
    //   router.refresh();
    //   toast.success('Success');
    } catch (error) {
    //   toast.error('Something went wrong.');
    }
  }, 
  [
    currentUser, 
    hasFavorited, 
    listingId, 
    loginModal,
    router
  ]);

  return {
    hasFavorited,
    toggleFavorite,
  }
}

export default useFavorite;
