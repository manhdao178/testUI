import Faucet from "../pages/Faucet";
import { default as Home } from "../pages/Home";
import { default as MiniKey } from "../pages/MiniKey";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/mint-key',
        name: 'Minikey',
        component: MiniKey
    },
    {
        path: '/faucet',
        name: 'Faucet',
        component: Faucet
    },
]
export default routes;