/* eslint-disable @typescript-eslint/no-unused-vars */
import Search from '../components/Search'
import { UserProps } from '../types/User'
import User from '../components/User'
import Error from '../components/Error'

import { useState } from 'react'

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false)

  const loadUser = async (userName: string) => {
    try {
      const res = await fetch(`https://api.github.com/users/${userName}`);

      if (!res.ok) {
        // Se a resposta não estiver OK, trate o erro aqui, se necessário
        setError(true)
        setUser(null)
        return;
      }

      setError(false)

      const data = await res.json();

      const { avatar_url, login, location, followers, following } = data;

      const userData: UserProps = {
        avatar_url,
        login,
        location,
        followers,
        following,
      };

      setUser(userData); // Atualiza o estado com os dados do usuário
      console.log(userData);
    } catch (error) {
      // Trate erros de requisição ou de parsing de JSON aqui
      console.error('Erro ao processar requisição:', error);
    }
  };


  return (
    <div>
        <Search loadUser={loadUser} />
        {user && <User {...user} />}
        {error && <Error />}
        <p className='AboutMe'>Feito por - <a href="https://www.linkedin.com/in/guilherme-moitinho-177034198/" target='_blank' className='Underline'>Guilherme Moitinho</a> </p>
    </div>
  )
}

export default Home
