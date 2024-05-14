import React from 'react'
import Select from 'react-select'
import { availableBarrios, postSensor } from '../../Utils/Sensores'

class SensorAlta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      barrios: [],
      mensaje:"",
    }
  }
  createSensor(e) {
    postSensor(e).then(res => {
      
    })    
  }
  componentDidMount() {
    availableBarrios()
      .then(res => {
        this.setState({
          barrios: res
        })
      })
  }
  render() {
    let options = this.state.barrios.map(function (barrio) {
      return { value: barrio.id, label: barrio.barrio };
    })
    return (
      <div className='wrapper'>
        <div className='form-box sensor'>
          <form onSubmit={this.createSensor}>
            <h1>Alta Sensor</h1>
            <div className='input-box'>
              <input id="serial" type="text" placeholder='serial' required />
            </div>
            <div className='input-select'>
              <Select id='lugar'
                name="barrio"
                options={options}
              />
              <button type="submit">Crear Sensor</button>
              <div>{this.state.mensaje}</div>
            </div>
            </form>
        </div>
      </div>
    )
  }
}
export default SensorAlta