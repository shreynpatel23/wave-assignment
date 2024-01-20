import React, { useEffect, useState } from 'react';

// * interfaces
import { ICustomer } from './interface';

// * components
import CustomerCard from './components/CustomerCard';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  // CONSTANTS
  const API_ENDPOINT = "https://waveaccounting.github.io/se-challenge-fe-customers/settings.json";

  // STATES
  const [isLoading, setIsLoading] = useState(true);
  const [customers, setCustomers] = useState<ICustomer[]>([]);

  /**
   * This effect runs when the component loads 
   * It fetches the list of the customer from database
   */
  useEffect(() => {
    function fetchAllCustomerList() {
      fetch(API_ENDPOINT).then(res => res.json())
        .then((response: { customers: ICustomer[] }) => {
          const { customers } = response;
          setCustomers(customers);
        })
        .catch(err => console.log('err', err))
        .finally(() => setIsLoading(false))
    }

    fetchAllCustomerList();
  }, [])

  /**
   * renders the loading, empty or the list of customers present
   * @returns JSX based on the current state
   */
  function renderCustomerList() {
    if (isLoading) {
      return <p>Fetching Customer List ...</p>
    }
    if (customers?.length <= 0) {
      return <p>No Customers Found!</p>
    }
    return customers.map((customer: ICustomer) => {
      return <CustomerCard key={customer.id} customer={customer} />
    })
  }

  return (
    <div className='h-[100vh]'>
      <Header />
      <main className='h-[83%] overflow-auto p-4'>
        <h1 className="text-2xl font-bold mt-4">Customers</h1>
        <div className="flex items-start flex-wrap gap-4 mt-4">
          {renderCustomerList()}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
