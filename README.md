"# The-Way-To-React"

## React-Intro

SPA >> Single Page Application => Whole website conatins a single HTML page

Components (Group codes)
DataBinding => uni Diractional, flow of the data
Virtual DOM
------------------------------Home.jsx

    Bannersection.jsx         Navbar.jsx      Section.jsx    Footer.jsx

                              home.jsx  about.jsx

Virtual DOM

    updated <p> in <body> -----> Virtual DOM ----->DOM -----> HTML Manipulation reflected on the web pg

index.js

<html>
<body>
<div id="root"></div>
</body>
</html>

Components: >> Class Components (Older Version) >> Function Components (Newest Version)

Redux (state management/local storage)
Hooks (Life Cycle Methods)

npx => node package execution
npx create-react-app project-name

## State & Props

## state => Data required for a component

<!-- var name="Narendra" -->

## Hooks -> useState(),setState()

const [variable,func]=useState();
const [count,setCount]=useState();
const [num,setNumber]=useState(0);
num += 1

## Props => Where we will be passing data among the components

## Parent Node -> Child Node

## eg: App.js -> ClassComponents.jsx | functionComponents.jsx

<FunctionComponent name="DevTown" age={20}>

## Routing & Layouts in ReactJs

Router >> Routes > Route
/contact / about /signIn /signUp

npm i react-router-dom

WorkFlow wrt ur routes

> > index.js >> app.js(BrowserRouter) >> diff routes

// webpage
/contact / about /signIn /signUp

Layouts: (HOC -> High Order Component)
/ParemtSignInAndUp

> > Nav >> footer

<!-- HOC's can add additional info/featues to the existing  components-->

## React Life Cycle Methods

render(){

}
cdm =>
componentDidMount(){

}

1 web pg >> 4 components >> 2 components

componentDidUpdate(){

}

componentWillUnmount(){

}

#useEffect()

## Book My Show Appln

HTML5 ,CSS3 , React , tailwind , MovieDB

react-slicks => carousel
react-icons
react-context-api(state-management || redux)
