import React, { useEffect, useState } from 'react';
import { ICustomer } from './interface';
import Header from './components/Header';
import Footer from './components/Footer';
import CustomerCard from './components/CustomerCard';

function App() {
  const API_ENDPOINT = "https://waveaccounting.github.io/se-challenge-fe-customers/settings.json";
  const [isLoading, setIsLoading] = useState(true);
  const [customers, setCustomers] = useState<ICustomer[]>([]);

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
  return (
    <div className='h-[100vh]'>
      <Header />
      <main className='h-[83%] overflow-auto p-4'>
        <h1 className="text-2xl font-bold mt-4">Customers</h1>
        <div className="flex items-start flex-wrap gap-4 mt-4">
          {isLoading ? <p>Fetching Customer List ...</p> :
            customers.map((customer: ICustomer) => {
              return <CustomerCard key={customer.id} customer={customer} />
            })
          }
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
