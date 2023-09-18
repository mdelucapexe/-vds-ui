import './App.css'
import { ApplicationLayout } from './components';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from './features';
import { DocAppBarPage, DocPageTitlePage, DocTablePage } from './docs';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ApplicationLayout />
    ),
    children: [
      {
        index: true,
        element: (
          <HomePage />
        )
      },
      {
        path: 'home',
        element: (
          <HomePage />
        )
      },
      {
        path: 'table',
        element: (
          <DocTablePage />
        )
      },
      {
        path: 'appbar',
        element: (
          <DocAppBarPage />
        )        
      },
      {
        path: 'pagetitle',
        element: (
          <DocPageTitlePage />
        )        
      }
    ]
  }
]);



function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
