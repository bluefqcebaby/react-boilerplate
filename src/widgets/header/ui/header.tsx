import { signOut } from '@/shared/api/auth/sign-out';
import { QUERY_KEYS } from '@/shared/constants/query-keys';
import * as UI from '@/shared/ui-kit';
import LogoutIcon from '@mui/icons-material/Logout';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const Header = () => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      queryClient.setQueryData([QUERY_KEYS.AUTH], null);
    },
  });

  return (
    <header className="bg-gray-800 py-4">
      <div className="container flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">ToDo App</h1>
        <UI.Fab color="info" isLoading={isPending} onClick={() => mutate()}>
          <LogoutIcon />
        </UI.Fab>
      </div>
    </header>
  );
};
