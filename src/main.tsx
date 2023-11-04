import React from 'react' //react import
import ReactDOM from 'react-dom/client' //react import integrado com a dom para web

import './global.css'


import { RouterProvider } from 'react-router-dom'
import { router } from './routes'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)

//Por aqui que você começa montando o layout, depois só divide em partes
//render() => mostrar em tela
//<React.StrictMode> não promove alterações visuais, porém nos avisa de erros dentro dele, logo é recomendado pelo react o seu uso
//<RouterProvider router={router}/>  é esse componente que receberá o conteúdo e será modificado de acordo com a rota acessada!