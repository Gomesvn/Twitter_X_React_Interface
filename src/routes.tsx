import { createBrowserRouter } from "react-router-dom";
import { Timeline } from "./pages/Timeline";
import { Status } from "./pages/Status";
import { Default } from "./layouts/Default";
import { Following } from "./pages/Following";

/*array de objetos contento onrigatóriamente path (o que vai aparecer depois da url principal) 
e  element (qual componente react será mostrado quando aquela rota for acessada)*/

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Default />,
        children: [//rotas contidas dentro do layout Default, ou seja, todas as rotas que terão sidebar
            {//home
                path: '/', //na home não precisa de nada após localhost:5173/
                element: <Timeline />
            },
            {//tweet (status)
                path: '/status', //localhost:5173/status 
                element: <Status />
            },
            {//tweet (following)
                path: '/following', //localhost:5173/status 
                element: <Following />
            },
        ]
    }
])