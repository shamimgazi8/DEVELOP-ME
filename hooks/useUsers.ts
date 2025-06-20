import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchUsers = async ({ pageParam = 0 }) => {
  const res = await axios.get(
    `https://tech-test.raintor.com/api/users/GetUsersList?take=10&skip=${pageParam}`
  );
  return res.data;
};

export const useUsers = () => {
  return useInfiniteQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      const nextSkip = pages.length * 10;
      return nextSkip < lastPage.total ? nextSkip : undefined;
    },
  });
};
