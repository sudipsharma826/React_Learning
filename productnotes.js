
Including results for select the same word all in vs code.
Do you want results only for se;ect the same worlsd all in vs code?
Ctrl + Shift + L
Product Mangemnt System : ( React Project)
->CURD Operation
-> Tailwind CSS
->Mysql


 Naming Convention in React js :
 Component Name: PascalCase (MyComponent)
 Props Name: camelCase (userName)
 Folder/File case: PascalCase or kebab-case (MyComponent.js or my-component.js)
 CSS Class Name: kebab-case (my-component-container)
 Variable Name: camelCase (userAge)
 Constants: UPPER_SNAKE_CASE (API_URL)
 Function Name: camelCase (handleSubmit)

Install the ES7 React/Redux/GraphQL/React-Native snippets extension in the VS code for the react js snippets. ( benefits that we can create the compments struciture by typing rafce )

Project steps:
1.Start the project 
npm create vital@latest and in the prpject.json folder in start changed dev to start

Tailwind intergration in the React Js ( https://tailwindcss.com/docs/guides/create-react-app)
npm install -D tailwindcss postcss autoprefixer ( tainwind css is the main ,postcss handdel the unsupported css in the broweser and autopixer handle the css as -webkit-) and others.
npx tailwindcss init -p
Paste the link contnet in the tailwind.config.js file
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
This main apply tailwind to the file that are in src and jave externsion as JSX,js;
In the src file you see a InputDeviceInfo.css file ,remove the built in css and paste this :
@tailwind base;
@tailwind components;
@tailwind utilities;
Now the css is applied ,just check by changin the color of text in the appendFile.jsx 
e.g <h1 className='text-blue-900 bg-orange-600'>Vite + React</h1> ( if not then view about steps clearly.)


Creating Routes in React Js:
npm install react-router-dom
adn create a files in src with name routes.js and in that routes.js we will defined all our routing .
routes.js ( file)
import React from 'react'
import { currentBrowserRouter } from 'react-router-dom'
import Home from './Home' (These are the page we need to render when the routes is called )
const routes = currentBrowserRouter([
    {
        path : '/',
        element: <Home/> ( we say for the path / Home page be shown) and create a pages folder in src folder that containa ll the pages ,jsx files.
    },(we can create multipel path and element)
    {
        path : '/about',
        element: <About/>
    }
])
export default routes 
  adn in App.jsx file we will import the routes and RouterProvider from react-router-dom as: 
  App.jsx (file)
  import React from 'react'
import { RouterProvider } from 'react-router-dom'
import routes from './routes.jsx' ( follwinf convection i kept file name as RouterProvider.jsx but it gave error its already defined  and i changed to routes.jsx)

const App = () => {
  return (
    <RouterProvider router={routes} /> 
  )
}

export default App ( till now all the things are file)

Now we need to create the compnents of the pages as: Navbar ,footer , (we are making a card in homepage so card compents), to sote all the filess make a compoents fodler in the src name componets and palced it here . 
and these complemnet can be called by simply : < file_name /> (e.g <Navbar />) and import the file in the App.jsx file.

and while making the compments one things to notice :
1. For image   : it should ends with /> (self close) as we donnot have childerne as iamg ,input ,br in react
2.Since ProductPage is already used so the file name changed to product-page.jsx ( all file name)
3. Cards are been horizonatail we need to amke it verifical so add a parent with className="flex  space x-5 mt-6"