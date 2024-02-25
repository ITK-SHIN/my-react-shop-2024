import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addNewProduct, getProducts } from '../../api/firebase';

export default function useProducts() {
  const queryClient = useQueryClient();

  const productsQuery = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    staleTime: 1000 * 60 * 2,
  });

  const addProduct = useMutation({
    mutationFn: ({ product, url }) => addNewProduct(product, url),
    onSuccess: () => queryClient.invalidateQueries(['products']),
  });

  return { productsQuery, addProduct };
}
