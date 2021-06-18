import axios from 'axios';
import { useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import { User } from '../types/api/user';

export const useAuth = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const login = useCallback(
    (id: string) => {
      // ロード開始
      setLoading(true);

      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          console.log(res.data);
          res.data ? history.push('/home') : alert('ユーザーが見つかりません');
        })
        .catch(() => alert('ログインできません'))
        .finally(() => setLoading(false));
    },
    [history]
  );
  return { login, loading };
};
