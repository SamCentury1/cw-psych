import React, { useEffect, useState } from 'react'
import { db } from '../../firebase-config'
import { collection, getDocs } from 'firebase/firestore'

import "./AdminPage.css"

const AdminPage = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([])

    useEffect(() => {

      const getData = async () => {
        const responsesRef = collection(db,'responses')
        const snapshot = await getDocs(responsesRef) 
        if (snapshot.empty) {
          return
        }

        let responsesArray = [] 
        snapshot.forEach(element => {
          responsesArray.push(element.data())
        });
        setData(responsesArray)
        await setIsLoading(false);
  
        // setData(responsesRef.data)
      }

      return () => {getData()}
    },[])
    console.log(data)


    const getValues = (responses,key) => {
      const matchingResponse = responses.find((obj) => obj.key === key)
      return matchingResponse.value
    } 

    const getOthers = (responses) => {
      const others = responses.find((obj) => obj.key === 'Z')
      if (others.value === 0) {
        return ''
      } else {
        const textValue = others.data.map((object) => {
          return `${object.body}: ${object.value} - `
        })
        return textValue
      }
    }

    const convertTime = (timeObject) => {
      const date = timeObject.toDate().toDateString('en-US')
      const time = timeObject.toDate().toLocaleTimeString('en-US')
      return `${date} - ${time}`
    }

    return (
      <>
      {
        isLoading ? (
          <>loading</>
        ) : (
          <div className='admin-container'>
            <table className='responses-table'>
              <thead>
                <tr>
                  <th>User</th>
                  <th>Created At</th>
                  <th>Q 1/A</th>
                  <th>Q 2/B</th>
                  <th>Q 3/C</th>
                  <th>Q 4/D</th>
                  <th>Q 5/E</th>
                  <th>Q 6/F</th>
                  <th>Q 7/G</th>
                  <th>Q 8/H</th>
                  <th>Q 9/I</th>
                  <th>Q 10/J</th>
                  <th>OTHER</th>
                  <th>Comments</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((obj, index) => {
                    return (
                      <tr key={index}>
                        <td>{obj.user}</td>
                        <td>{convertTime(obj.createdAt)}</td>
                        <td>{getValues(obj.responses,'A')}</td>
                        <td>{getValues(obj.responses,'B')}</td>
                        <td>{getValues(obj.responses,'C')}</td>
                        <td>{getValues(obj.responses,'D')}</td>
                        <td>{getValues(obj.responses,'E')}</td>
                        <td>{getValues(obj.responses,'F')}</td>
                        <td>{getValues(obj.responses,'G')}</td>
                        <td>{getValues(obj.responses,'H')}</td>
                        <td>{getValues(obj.responses,'I')}</td>
                        <td>{getValues(obj.responses,'J')}</td>
                        <td>{getValues(obj.responses,'Z')}</td>
                        <td>{getOthers(obj.responses)}</td>
                      </tr>
                    )
                  })
      
                }
              </tbody>
            </table>
          </div>
        )
      }
      </>

    )
}

export default AdminPage
