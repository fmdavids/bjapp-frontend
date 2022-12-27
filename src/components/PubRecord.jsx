import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import '../styles/pub.css'

const PubRecord = () => {
  const [pubData, setPubData] = useState({
    name: '',
    dob: '',
    dim: '',
    sex: 'Male',
    hope: '',
    group: '',
    previlege: '',
    pioneer: '',
    pub_address: '',
    pub_phone: '',
    emergency_name: '',
    emergency_address: '',
    emergency_phone: ''
  })
  // const [inputBtn setInputBtn] = useState('');

  const { name, dob, dim, group, pub_address, pub_phone, emergency_name, emergency_address, emergency_phone } = pubData

  const onChange = (e) =>{
    const {name, value, } = e.target
    // const {name, value, type, checked} = e.target
    setPubData(prevState => ({
        ...prevState,
        [name]: value
        // [name]: type === "checkbox"? checked : value 
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post(`http://localhost:3031/api/cpr/addpub`, pubData)
      // console.log(pubData)
      // axios.post(`https://bj-pub-app.onrender.com/api/cpr/addpub`, pubData)
    } catch (error) {
      console.log(error)
    }
    
  }
  // const isSelected = (value, e) =>{
  //   console.log(value,  pubData, e)
  //   return pubData[e?.target.name] === value
  // }
  // const handleChecked = (e) => setPubData(e.target.value)
  // const handleCheckedHope = (e) => setPubData(e.target.value)



  return (
    <div className="container w-full pt-[80px] pb-[90px] ">
      <div className='w-[1000px] mx-auto p-10 bg-white'>
        <h1 className='text-center text-4xl mx-auto mb-5'>CONGRGATION'S PUBLISHER RECORD</h1>
        <form onSubmit={onSubmit} >
          <div className="name w-full">
              <label className='px-3 labelTag' htmlFor="name">Name:</label>
              <input type="text" name='name' value={name} onChange={onChange} className='w-[840px] ml-1 ' />
          </div>
          <div className="flex pt-3">
            <div className="dateBox w-2/3">
              <div className="dates w-full">
                  <label className='px-3 labelTag' htmlFor="dob">Date of birth:</label>
                  <input className='w-[400px] float-right' name='dob' value={dob} onChange={onChange} type="date" />
              </div>
              <div className="dates w-full pt-3">
                  <label className='px-3 labelTag' htmlFor="dim">Date immersed:</label>
                  <input className='w-[400px] float-right' name='dim' value={dim} onChange={onChange} type="date" />
              </div>
            </div>
            <div className="other w-1/3 ml-10">
                <div className="sex pb-3">
                    <label className='mr-5' htmlFor=""><input className='mr-1' name='sex' value='Male' onChange={onChange} type="radio" />Male</label>
                    <label className='mr-5' htmlFor=""><input className='mr-1' name='sex' value='Female' onChange={onChange} type="radio" />Female</label>
                </div>
                <div className="hope ">
                    <label className='mr-5' htmlFor="other sheep"><input className='mr-1' name='hope' value='Other Sheep' onChange={onChange} type="radio" />Other Sheep</label>
                    <label className='mr-5 ' htmlFor="annoited"><input className='mr-1' name='hope' value='Anoited' onChange={onChange} type="radio" />Annoited</label>
                </div>
            </div>
          </div>
          <div className="privileges my-2 mr-10 ">
            <label className='pl-3 ' htmlFor="group">Group<input className='ml-2' name='group' value={group} onChange={onChange} type="number" /></label>
            <label className='pl-5 ' htmlFor="elder"><input className='mr-1' name='previlege' value='Elder' onChange={onChange} type="radio" />Elder</label>
            <label className='pl-5 ' htmlFor="ms"><input className='mr-1' name='previlege' value='Ms' onChange={onChange} type="radio" />Ministerial Servant</label>
            <label className='pl-5 ' htmlFor="pioneer"><input className='mr-1' type="checkbox" name='pioneer' value="pioneer" onChange={onChange} />Regular Pioneer</label>
          </div>
          <div className="contact w-[1000px] pl-3 mt-5 ">
            <div className="pub_details w-[1000px] my-1 ">
              <div className="w-[1000px] my-1">
                <label className='w-1/2 mr-5' htmlFor="pub_address">Person Address: </label>
                <input className='w-[700px] mr-20 float-right ' name='pub_address' value={pub_address} onChange={onChange} type="text" />
              </div>
              <div className=" w-[1000px] my-1">
                <label className='w-1/2 ' htmlFor="pub_phone">Person Phone: </label>
                <input className='w-[700px] mr-20 float-right ' name='pub_phone' value={pub_phone} onChange={onChange} type="tel" />
              </div>
            </div>
            <div className="emergency_details ">
              <div className=" w-[1000px] my-1 ">
                <label className='w-1/2 ' htmlFor="emergency_name">Emergency Contact Person: </label>
                <input className='w-[600px] mr-20 float-right ' name='emergency_name' value={emergency_name} onChange={onChange} type="text" />
              </div>
              <div className=" w-[1000px] my-1 ">
                <label className='w-1/2 ' htmlFor="emergency_address">Emergency Contact Address: </label>
                <input className='w-[600px] mr-20 float-right'name='emergency_address' value={emergency_address} onChange={onChange} type="text" />
              </div>
              <div className=" w-[1000px] my-1">
                <label className='w-1/2 ' htmlFor="emergency_phone">Emergency Contact Phone: </label>
                <input className='w-[600px] mr-20 float-right' name='emergency_phone' value={emergency_phone} onChange={onChange} type="tel" />
              </div>              
            </div>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold ml-3 py-2 mt-3 px-4 rounded">
  Save
</button>
        </form>
      </div>
    </div>
  )
}

export default PubRecord
