import './App.css';
import Editor from './Editor';

function App() {

  const html = `<div class="joyful"></div>`
  const css = `.joyful{
    background:#F4FB0A;
    transform:rotate(45deg);
    width:100px;
    height:100px;
    margin:25px;
    border-radius:50% 0;
    box-shadow:2px 2px 3px #ccc;
  }`

  const initialSrc = (
    `
      <html>
        <body>${html}</body>
        <style>${css}</style>                
      </html>
    `
  )

 return(
  <>
  <h1>Make the Lemon</h1>
  <main>    
    <div className='promptPanel'>
      <div className='promptWall'></div>
      <Editor htmlStart={html} cssStart={css} initialSrc={initialSrc} />  
      <div className='quiz'>
        <div className='joyful'></div>
      </div>    
    </div>
    <div className='userPanel'>
      <Editor htmlStart={''} cssStart={''}/>      
    </div>
  </main>
  </>
  );
}
export default App