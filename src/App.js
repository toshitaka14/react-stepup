
import './App.css';
import { CssModules } from "./componets/CssModules";
import { Emotion } from './componets/Emotion';
import { InlineStyle } from './componets/InlineStyle';
import { StyledJSx } from './componets/StyledJsx';

export default function App(){
  return(
   <div className="App">
   < InlineStyle />
   <CssModules />
   <StyledJSx />
   <Emotion />
   </div>
  );
};