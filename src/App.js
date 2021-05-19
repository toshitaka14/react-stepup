
import './App.css';
import { CssModules } from "./componets/CssModules";
import { InlineStyle } from './componets/InlineStyle';

export default function App(){
  return(
   <div className="App">
   < InlineStyle />
   <CssModules />
   </div>
  );
};