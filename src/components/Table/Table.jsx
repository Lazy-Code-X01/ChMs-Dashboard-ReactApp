import React from 'react'
import './Table.scss'

//importing material UI table components
//importing table components
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { Link } from 'react-router-dom';

// importing images
import male1 from './../../images/male_1.jpg'
import male2 from './../../images/male_2.jpg'
import female2 from './../../images/female_2.PNG'
import male3 from './../../images/male_3.PNG'


const List = () => {


  const data = [

    {
      id: 1,
      name: 'Tunde Amos',
      phone: '+2349019953850',
      img: male1,
      // img: "https://source.unsplash.com/random/?Cryptocurrency",
      gender: 'Male',
      status: 'Member',
      dept: 'Ushering',
      dob: 'Nov., 22',
    },
    {
      id: 2,
      name: 'John Doe',
      phone: '+2349019953850',
      img: male2,
      // img: "https://source.unsplash.com/random/?Cryptocurrency",
      gender: 'Female',
      status: 'Worker',
      dept: 'Media',
      dob: 'Nov., 22',
    },
    {
      id: 3,
      name: 'Adeyemi Juwon',
      phone: '+2349019953850',
      img: male3,
      // img: "https://source.unsplash.com/random/?Cryptocurrency",
      gender: 'Male',
      status: 'Minister',
      dept: 'Chior',
      dob: 'Nov., 22',
    },
    {
      id: 4,
      name: 'Stanley Okoli',
      phone: '+2349019953850',
      img: male2,
      // img: "https://source.unsplash.com/random/?Cryptocurrency",
      gender: 'Male',
      status: 'Member',
      dept: 'Children',
      dob: 'Nov., 22',
    },
    {
      id: 5,
      name: 'Emmanuel Dara',
      phone: '+2349019953850',
      img: female2,
      // img: "https://source.unsplash.com/random/?Cryptocurrency",
      gender: 'Female',
      status: 'Worker',
      dept: 'Chior',
      dob: 'Nov., 22',   
    },
    {
      id: 6,
      name: 'Domminion Tunde',
      phone: '+2349019953850',
      img: male2,
      // img: "https://source.unsplash.com/random/?Cryptocurrency",
      gender: 'Male',
      status: 'Worker',
      dept: 'Children',
      dob: 'Nov., 22',    
    },
// ---------------
  ]

  const [members, setMembers] = React.useState(data)

  const handleDelete = (id) => {
    const newMembers = members.filter((member) => member.id !== id)
    setMembers(newMembers)
  }

  //scroll to top button for view button when the component is re-rendered
    const goToTop = () => {
      window.scrollTo({
          top: 0,
          behavior: "smooth",
      });
    };

  return (
    <>
      <div className="membersTitle">
      RCCG KPM Members
      <Link to='/lists/members/new' style={{textDecoration: 'none'}} className='link'>
        <span className='holder'>
          <PersonAddAlt1Icon />
          <span> Add New Member </span>
        </span>
      </Link>
      </div>

      <TableContainer component={Paper} className='table'>

          <Table sx={{ minWidth: 650 }} aria-label="simple table">

              <TableHead className='tableHead'>
                  <TableRow>
                    <TableCell className="tableCell">NAME</TableCell>
                    <TableCell className="tableCell">GENDER</TableCell>
                    <TableCell className="tableCell">BIRTHDAY</TableCell>
                    <TableCell className="tableCell">STATUS</TableCell>
                    <TableCell className="tableCell">DEPT.</TableCell>
                    <TableCell className="tableCell">ACTIONS</TableCell>
                  </TableRow>
              </TableHead>

              <TableBody>

                  {members.map((data, index) => (

                  <TableRow key={index} >

                      <TableCell className="tableCell">
                        <div className="cellWrapper">
                          <img src={data.img} alt="profile loading ..." className='image' />
                          <div className="wrap">
                            <div className='name'>
                              {data.name}
                            </div>
                            <div className='phone'>
                              {data.phone}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="tableCell">{data.gender}</TableCell>
                      <TableCell className="tableCell">{data.dob}</TableCell>
                      <TableCell className={`tableCell ${data.status}`}>{data.status}</TableCell>
                      <TableCell className="tableCell">{data.dept}</TableCell> 
                      <TableCell className="tableCell action">
                      <Link to='/lists/members/singletest' style={{textDecoration: 'none'}}>
                        <span className="view" onClick={goToTop}>View</span>
                      </Link>
                        <span className="delete" onClick={()=>handleDelete(data.id)}>Delete</span>
                      </TableCell>
                  </TableRow>
                  ))}
              </TableBody>
          </Table>
      </TableContainer>
    </>

  )
}

export default List