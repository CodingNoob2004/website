import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const Foo = ({name}) =>{
  return(
    <p>This is an item component. Its name is {name}</p>
  )
}

const Item = (props) => {
  return(
    <div> 
      <p>This is an item component. Its name is {props.name}</p>
      <Foo name = {'UwU'} />
      <Foo name = {'OwO'} />
      {item}
    </div>
  )
}

const item = <p>This is an item</p>

const element= <div>
  <h1>Hello, People</h1>
  <p>This is a page test</p>
  <Item name = {'-w-'}/>
</div>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //<App />,
);
