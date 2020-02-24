import React, { Component, createRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Nama from './component/nama'

// class Nama extends Component {
//   state ={ }
//   render() {
//     return (
//       <div className='kotak'>
//         {this.props.namagua}
//       </div>
//     )
//   }
// }

class App extends Component {
  state ={
    murid:[
      // {
      //   nama:'angga',
      //   umur:21
      // }, 
      // {
      //   nama:'sofia',
      //   umur:22
      // },
      // {
      //   nama:'putri',
      //   umur:23
      // }
    ],
    inputnama:createRef(),
    inputusia:''
  }

  componentDidMount(){
    var isidata=[
      {
        nama:'angga',
        umur:21
      }, 
      {
        nama:'sofia',
        umur:22
      },
      {
        nama:'putri',
        umur:23
      }
    ]
    this.setState({murid:isidata})
  }

  componentDidUpdate(){
    console.log('ini did update')
  }
  
  capitalfirst=(input)=>{
    const upper = input.charAt(0).toUpperCase() + input.substring(1)
    return upper
  }


  rendernamamurid=()=>{
      return this.state.murid.map((val,index)=>{
        return (
        <Nama containerstyle={{marginBottom:20}} key={index}>
          <div>
            <span style={{fontWeight:'bolder'}}>Nama</span>&nbsp;:{this.capitalfirst(val.nama)}
          </div>
          <div>
            <span style={{fontWeight:'bolder'}}>Usia</span>&nbsp;:{val.umur}
          </div>
        </Nama>
      )
    })
  }

  onAddButtonClick=()=>{
    var nama=this.state.inputnama.current.value//pake createref
    var usia=parseInt(this.state.inputusia) //onchange
    var muridbaru=this.state.murid
    muridbaru.push({nama:nama,umur:usia})
    this.state.inputnama.current.value=''
    this.setState({murid:muridbaru,inputusia:''})
  }
  
  render() {
    if(this.state.murid.length===0){
      return (
        <div>
          Loading
        </div>
      )
    }
    return (
      <div className='tengah' style={{height: '99vh'}}>
        {
          this.rendernamamurid()
        }
        <input type='text' className='mb-2' placeholder='masukkan nama' ref={this.state.inputnama}/>
        <input 
          type='number' 
          placeholder='masukkan usia' 
          value={this.state.inputusia} 
          onChange={(event)=>this.setState({inputusia:event.target.value})} />
        <button onClick={this.onAddButtonClick} className='btn btn-primary'>
          Add
        </button>
      </div>
    )
  }
}


// class App extends Component {
//   state ={
//     murid:['angga', 'putri','sofia']
//   }
//   render() {
//     return (
//       <div className='tengah' style={{height: '99vh'}}>
//         {
//           this.state.murid.map((val,index)=>{
//             return <Nama key={index} namagua={val}/>
//           })
//         }
//       </div>
//     )
//   }
// }



// function App() {
//   return (
//       <div className='tengah' style={{height: '99vh'}}>
//         <Nama namagua={'Angga'}/>
//         {/* <div className='kotak'>
//           dasada
//         </div> */}
//       </div>
//   );
// }

export default App;
