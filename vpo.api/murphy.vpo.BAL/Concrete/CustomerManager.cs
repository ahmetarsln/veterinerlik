using murphy.vpo.BAL.Abstract;
using murphy.vpo.DAL.Abstract;
using murphy.vpo.Entity.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace murphy.vpo.BAL.Concrete
{
    public class CustomerManager : ICustomerService
    {
        private readonly ICustomerDal _customerDal;

        public CustomerManager(ICustomerDal customerDal)
        {
            _customerDal = customerDal;
        }

        public async Task AddAsync(Customer customer)
        {
            await _customerDal.AddAsync(customer, true);
        }

        public async Task DeleteAsync(int customerId)
        {
            await _customerDal.DeleteAsync(customerId, true);
        }

        public async Task<IList<Customer>> GetAllAsync()
        {
            return await _customerDal.GetAllAsync();
        }

        public async Task<Customer> GetByIdAsync(int customerId)
        {
            return await _customerDal.GetByIdAsync(customerId);
        }

        public async Task UpdateAsync(Customer customer)
        {
            await _customerDal.UpdateAsync(customer, customer.Id, true);
        }
    }
}
