import React from 'react'
import './Datatable.css'
import { DataGrid } from '@mui/x-data-grid';
import {userColumns, userRows} from '../../datatablesource'
import { Link } from 'react-router-dom';

const Datatables = () => {

  const [data, setData] = React.useState(userRows)

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }


  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to='/lists/test' style={{textDecoration: 'none'}}>
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Delete</div>
          </div>
        )
      }
    }
  ]


  return (
    <div className='datatable'>

      {/* <div className="datatableTitle">
        Attendance
      </div> */}

       <DataGrid
       className='data_grid'
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatables