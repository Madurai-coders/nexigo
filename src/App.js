import './App.css';
import Home from './components/home';
import Vigor from './components/vigor';
   import { RoundedBox,ScrollControls,Scroll,Environment } from '@react-three/drei';
   import { Bt } from '../src/components/bat';
   function App() {
     return (
      <>
      <color attach="background" args={['#ffffff']}/>
      <ambientLight intensity={0} /> 
         <Environment
           preset='warehouse'
         />
   <ScrollControls pages={3} damping={0.1}>
   <Bt/>

     <Scroll>

     </Scroll>
     <Scroll html style={{width: '100%'}}>
  <Home/>
    <Vigor/>
     </Scroll>
   </ScrollControls>
   
      </>
     );
   }
   
   export default App;
   