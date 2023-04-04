import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import {store} from './store'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Start } from './Pages/Start'

const container = document.getElementById("root")!;
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Start/>,
    children:[]
  }
])

root.render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
)