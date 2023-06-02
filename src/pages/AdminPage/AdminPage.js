import React, { useEffect, useState } from 'react'
import { db } from '../../firebase-config'
import { collection, getDocs } from 'firebase/firestore'

import { CSVLink } from "react-csv";

import "./AdminPage.css"

const AdminPage = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([])

    useEffect(() => {

      const getData = async () => {
        try {
          const responsesRef = collection(db,'responses')
          const snapshot = await getDocs(responsesRef) 
          if (snapshot.empty) {
            return
          }
  
          let responsesArray = [] 
          snapshot.forEach(element => {
            responsesArray.push(element.data())
          });
          await setData(responsesArray)
          await setIsLoading(false);
        } catch (error) {
          console.log(error)
        }
      }

      getData()
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



    const downloadData = () => {

      const tableHeaders = [
        {label: "User", key: "user"},
        {label: "Created At", key: "created_at"},
        {label: "Question 1 (A)", key: "Q_1/A"},
        {label: "Question 2 (B)", key: "Q_2/B"},
        {label: "Question 3 (C)", key: "Q_3/C"},
        {label: "Question 4 (D)", key: "Q_4/D"},
        {label: "Question 5 (E)", key: "Q_5/E"},
        {label: "Question 6 (F)", key: "Q_6/F"},
        {label: "Question 7 (G)", key: "Q_7/G"},
        {label: "Question 8 (H)", key: "Q_8/H"},
        {label: "Question 9 (I)", key: "Q_9/I"},
        {label: "Question 10 (J)", key: "Q_10/J"},
        {label: "Other", key: "other"},
        {label: "Comments", key: "comments"},

      ]

      const tableData = data.map((obj,index) => {
        return {
          "user" : obj.user,
          "created_at": convertTime(obj.createdAt),
          "Q_1/A" : getValues(obj.responses,'A'),
          "Q_2/B" : getValues(obj.responses,'B'),
          "Q_3/C" : getValues(obj.responses,'C'),
          "Q_4/D" : getValues(obj.responses,'D'),
          "Q_5/E" : getValues(obj.responses,'E'),
          "Q_6/F" : getValues(obj.responses,'F'),
          "Q_7/G" : getValues(obj.responses,'G'),
          "Q_8/H" : getValues(obj.responses,'H'),
          "Q_9/I" : getValues(obj.responses,'I'),
          "Q_10/J" : getValues(obj.responses,'J'),
          "other" : getValues(obj.responses,'Z'),
          "comments" : getOthers(obj.responses),

        }
      })

      return {"headers" : tableHeaders, "data": tableData}
    }

    if (isLoading) return <>loading</>
    return (

          <div className='admin-container'>
            <CSVLink data={downloadData().data} headers={downloadData().headers} filename={`results_${new Date()}`}>
              Export to CSV
            </CSVLink>
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

export default AdminPage
