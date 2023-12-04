/* eslint-disable @typescript-eslint/no-unused-vars */
type SearchProps = {
    loadUser: (userName: string) => Promise<void>
}

import React from 'react'
import { useState } from 'react'
import {BsSearch} from 'react-icons/bs'
import classes from './Search.module.css'


const Search = ({loadUser}: SearchProps) => {
    const [userName, setUserName] = useState("")

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
          loadUser(userName);
        }
      };
  return (
    <div className={classes.search}>
        <h2>Busque por um usuario</h2>
        <p>Conheca seus melhores repositorios</p>
        <div className={classes.search_container}>
            <input type="text" placeholder='Digite o nome do usuario'  onKeyDown={handleKeyDown}onChange={(e) => setUserName(e.target.value)} />
            <button onClick={() => loadUser(userName)}>
                <BsSearch />
            </button>
        </div>
    </div>
  )
}

export default Search