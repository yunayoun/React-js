import React,{ Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles'

const styles = theme =>({
  root:{
    width:'100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table:{
    minWidth: 1080
  }
})

const customers =[{
  'id': '1',
  'image': 'https://picsum.photos/64/64',
  'name': '홍길동',
  'birthday': '392039',
  'gender': '남자',
  'job': '학생',
},{
  'id': '2',
  'image': 'https://picsum.photos/64/64',
  'name': '김철수',
  'birthday': '456722',
  'gender': '남자',
  'job': '엔지니어',
},{
  'id': '3',
  'image': 'https://picsum.photos/64/64',
  'name': '박춘향',
  'birthday': '123456',
  'gender': '여자',
  'job': '사업가',
}]

function App(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {customers.map(c=> {
            return(
            <Customer 
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
            );
            })}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(App);
