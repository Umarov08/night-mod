import { useState } from 'react';
import './App.scss';

function App() {


  const [mode, setMode] = useState(true)


  return (
    <div hieght={700} className={mode == true ? 'App container light' : 'App container dark'}>
      <div className='nav'>
      </div>
      <section className='hero'>
        <div className='hr'>
          <h1>Dark Mod Night Mod</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ullam ab enim magnam distinctio, doloribus omnis, consequatur quidem quos quae porro. Sapiente aperiam ad incidunt impedit, perferendis aliquam laboriosam officia!</p>
        </div>
      </section>
      <div className="btn">
      <button className={mode == true ? 'btn end' : 'btn start'} onClick={() => setMode(!mode)}>
        <img className={mode == true ? 'rotate' : 'rotate2'} width={70} src={mode ? 'https://cdn-icons-png.flaticon.com/128/1812/1812660.png' : 'https://www.freeiconspng.com/thumbs/sun-icon/sun-icon-31.png'
        } />
      </button>
      </div>
    </div>
  );
}
export default App;
