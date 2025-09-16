import { Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Gettable = () => {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>City</TableCell>
                        <TableCell>Class</TableCell>
                    </TableRow>
                </TableHead>
            </Table>
      </TableContainer>
  )
}

export default Gettable