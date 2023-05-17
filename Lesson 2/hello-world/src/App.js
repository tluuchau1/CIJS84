import Card from './Component/card.js';
import { data } from './data/data.js';

function App() {
  return (
    <div className='container'>
      <h1 className='container-title'>The Future of WYSIWYG</h1>
      <div className='box'>
        {data.map((item) => (
          <Card title={item.title} image={item.image} decription={item.decription} />
        ))}
      </div>
    </div>

  );
}

export default App;
