import {shallow} from 'enzyme';
import AppContainer from '../components/AppContainer'

describe('Pruebas en <Contenido/> 1',() => {
  test('llamado a gato 2', () =>{
    const wrapper = shallow( <AppContainer />);
    expect(wrapper.contains(<h2>Aplicación React</h2>)).toBe(true);
  })
})


describe('Pruebas en <Contenido/> 2',() => {
  test('llamado a gato 2', () =>{
    const wrapper = shallow( <AppContainer />);
    expect(wrapper.contains(<div className='container animate__animated animate__fadeIn animate__delay-2s' /> )).toBe(true);
  })
})

describe('Pruebas en <Contenido/> 3',() => {
  test('llamado a gato 2', () =>{
    const wrapper = shallow( <AppContainer />);
    expect(wrapper.contains(<h2 className='text'>Lista de gatos</h2> )).toBe(true);
  })
})

