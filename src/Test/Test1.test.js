import {shallow} from 'enzyme';
import Contenido from '../componentes/Contenido'

describe('Pruebas en <Contenido/> 1',() => {
  test('llamado a gato 2', () =>{
    const wrapper = shallow( <Contenido />);
    expect(wrapper.contains(<h2>Aplicación React</h2>)).toBe(true);
  })
})


describe('Pruebas en <Contenido/> 2',() => {
  test('llamado a gato 2', () =>{
    const wrapper = shallow( <Contenido />);
    expect(wrapper.contains(<div class="animate__animated animate__bounce animate__slower" /> )).toBe(true);
  })
})

describe('Pruebas en <Contenido/> 3',() => {
  test('llamado a gato 2', () =>{
    const wrapper = shallow( <Contenido />);
    expect(wrapper.contains(<h2 className='text'>Lista de gatos</h2> )).toBe(true);
  })
})

