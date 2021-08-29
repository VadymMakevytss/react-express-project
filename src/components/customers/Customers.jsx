import React, { useEffect,  useState} from 'react';
import './Customers.css'
import Grid from '@material-ui/core/Grid'
import { CustomersCard } from '../cards/CustomersCard';
import { publishUsers } from '../../api/api';

export const Customers = () => {
  const [customers, setCustomers] = useState([])

  useEffect (() => {
    const getUsers = async() => {
      const users = await publishUsers()
      const sortedUsers = users.sort((a, b) => a.name.localeCompare(b.name))
      console.log('Sorted users list: ', sortedUsers)
      setCustomers([...sortedUsers])
    }

    getUsers()
  }, [])

    return (
      <Grid container spacing={5} justifyContent="center">
          {customers.map(customer => 
            <CustomersCard customer={customer} key={customer.id}/>
          )}
      </Grid>
   )
}
