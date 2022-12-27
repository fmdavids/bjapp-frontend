// design the form as in the sample with this additional features:
// before the name input there will be a option to select group from group  1 - 5 that will fetch only the names for that group.
// the name field will preload the names of the group members so I can select the desired name
import React from 'react'
import '../styles/report.css'
import { useState, useEffect } from 'react'
import axios from 'axios';

const FieldServiceReport = () => {
    const [reportData, setReportData] = useState({
        group: '',
        name: '',
        month: '',
        placements: '',
        videos: '',
        hours: '',
        return_visit: '',
        study: '',
        remark: '',
    })
    const [publisher, setPublisher] = useState([])
    const [selectedGroup, setSelectedGroup] = useState('')
    const [selectedName, setSelectedName] = useState('')

    const fetchGroupNumber = async () => {  
        
        try {
            const res = await axios.get("https://baj-pub-app.onrender.com/api/cpr/group")
            // const res = await axios.get("http://localhost:3031/api/cpr/group")
            // const getGroup = res.data.pub            
                setReportData(res.data.groupNumber);
                // console.log(getGroup);
                console.log(res.data.groupNumber);
        } catch (error) {
            console.log(error)
        }

        // try {
        //     const res = await axios.get("http://localhost:3031/api/cpr")
        //     const getGroupName = res.data.pub            
        //         setReportData(getGroupName);
        //         console.log(getGroupName);
        // } catch (error) {
        //     console.log(error)
        // }
        
        // await axios.get("http://localhost:3031/api/cpr").then(res => {
        //     // console.log(res.data.pub[0].name)
        //     // console.log(res.data.pub[0].group)
        //     setReportData(res.data.pub);
        // }).catch(error => console.log(error))
        // // console.log(data.group)
      };

      // Trigger the fetchData after the initial render by using the useEffect hook
      useEffect(() => {
        fetchGroupNumber();
      }, []);
      

    const { group, name, month, placements, videos, hours, return_visit, study, remark } = reportData
    
    const onChange = (e) =>{
        const {name, value, } = e.target
        console.log(e.target.value)
        setReportData(prevState => ({
            ...prevState,
            [name]: value
            // [e.target.name]: e.target.value
        }))
    }

    const getGroupMembers = async (e) => {
        try {
            const {name, value, } = e.target
            // console.log(e.target.value)
            const pub = await axios.get(`https://baj-pub-app.onrender.com/api/cpr/groupname/${e.target.value}`)
            // const pub = await axios.get(`http://localhost:3031/api/cpr/groupname/${e.target.value}`)
            setSelectedGroup(value)
            setPublisher(pub.data.pub)
        } catch (error) {
            console.log(error)
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault()  
        const reports = {group: selectedGroup, name: selectedName, month: reportData.month, placements: reportData.placements, videos: reportData.videos, hours: reportData.hours, return_visit: reportData.return_visit, study: reportData.study, remark: reportData.remark}
        console.log(reports)
        try {
            await axios.post(`https://baj-pub-app.onrender.com/api/reports/addreport`, reports );
            // await axios.post(`http://localhost:3031/api/reports/addreport`, reports );
          } catch (error) {
            console.log(error);
          }     
    }

  return (
    <div className='w-1/3 mx-auto mt-20 p-5 bg-white'>
        <h2 className="text-2xl text-center font-bold pb-3">FIELD SERVICE REPORT</h2>

        <form className=' mt-0' onSubmit={onSubmit} >
            <div className="mb-3">
            <div className="w-full">
                <label htmlFor="group" className='labelTag'>Group: 
                </label>
                <select className='selectInput w-full' value={selectedGroup} onChange={getGroupMembers}>
                    <option> Select Group</option>
                    <option value={1}>Group 1</option>
                    <option value={2}>Group 2</option>
                    <option value={3}>Group 3</option>
                    <option value={4}>Group 4</option>
                    <option value={5}>Group 5</option>
                    
                </select>
            </div>
            <div className="w-full">
                <label htmlFor="name" className='labelTag'>Name: 
                </label>
                <select className='selectInput w-full' value={selectedName} onChange={(e) => setSelectedName(e.target.value)}>
                    <option> Select Name</option>
                    {publisher && publisher.map((pub) => (
                    <option key={pub._id} value={pub.name}>{pub.name}</option>
                ))}
                {/* <option value="Olufemi Ademiju">Olufemi Ademiju</option>
                <option value=" Jumoke Yakubu">Jumoke Yakubu</option> */}
                </select>
            </div>
            <div className="w-full">
                <label htmlFor="month" className='labelTag'>Month:
                </label>
                <input className='selectInput' type="month" name="month" value={month} onChange={onChange} />
            </div>
            </div>
            <div className="reportBox w-full ">
                <div className=" w-full mt-2 ">
                    <label htmlFor="placement" className='labelTag'>Placements (Print and Electronics)
                    </label>
                    <input className='selectInput' type="number" placeholder='Placement' name="placements" value={placements} onChange={onChange} />
                </div>
                <div className="w-full mt-2">
                    <label htmlFor="video-showing" className='labelTag'>Video Showing
                    </label>
                    <input className='selectInput' type="number" placeholder='Videos' name="videos" value={videos} onChange={onChange} />
                </div>
                <div className="w-full mt-2">
                    <label htmlFor="hours" className='labelTag'>Hours
                    </label>
                    <input className='selectInput' type="number" placeholder='Hours' name="hours" value={hours} onChange={onChange} />
                </div>
                <div className="w-full mt-2">
                    <label htmlFor="return_visit" className='labelTag'>Return Visit
                    </label>
                    <input className='selectInput' type="number" placeholder='Return Visit' name="return_visit" value={return_visit} onChange={onChange} />
                </div>
                <div className="w-full mt-2">
                    <label htmlFor="study" className='labelTag'>Number Bible Studies Conducted
                    </label>
                    <input className='selectInput' type="number" placeholder='Bible Study' name="study" value={study} onChange={onChange} />
                </div>
                <div className="w-full mt-2">
                    {/* <label htmlFor="reporting" className='labelTag'>Reporting
                    <input className='selectInput' type="radio" name="reporting" value={reporting} checked={reportData === true} onChange={onChange} />
                    <input className='selectInput' type="radio" name="reporting" value={true} checked={reportData.reporting === true} onChange={() =>{checked={reportData === true}}} />
                    </label> */}
                    <div className="">
                    <label htmlFor="remark" className='labelTag'>remark
                    <input className='selectInput' type="text" name="remark" value={remark} onChange={onChange} />
                    </label>
                    </div>
                </div>
            </div>
            <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-3 px-4 rounded">
            Submit
            </button>
        </form>
    </div>
  )
}

export default FieldServiceReport
