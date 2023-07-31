import react from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


function Customer(props){
  return(
    <>
      <TableRow>
        <TableCell>{props.id}</TableCell>
        <TableCell><img src={props.image} alt='profile'></img></TableCell>
        <TableCell>{props.name}</TableCell>
        <TableCell>{props.birthday}</TableCell>
        <TableCell>{props.gender}</TableCell>
        <TableCell>{props.job}</TableCell>
      </TableRow>
    </>

  )
};

  // function CustomerProfile(props){
  //   return(
  //     <>
  //       <img src={props.image} alt='profile'/>
  //       <h2>{props.name}({props.id})</h2>
  //     </>
  //   )
  // }

  // function CustomerInfo(props){
  //   return(
  //     <>
  //       <p>{props.birthday}</p>
  //       <p>{props.gender}</p>
  //       <p>{props.job}</p>
  //     </>
  //   )
  // }

export default Customer;