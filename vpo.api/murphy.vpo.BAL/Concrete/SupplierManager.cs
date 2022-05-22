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
    public class SupplierManager : ISupplierService
    {
        private readonly ISupplierDal _supplierDal;

        public SupplierManager(ISupplierDal supplierDal)
        {
            _supplierDal = supplierDal;
        }

        public async Task AddAsync(Supplier supplier)
        {
            await _supplierDal.AddAsync(supplier, true);
        }

        public async Task DeleteAsync(int supplierId)
        {
            await _supplierDal.DeleteAsync(supplierId, true);
        }

        public async Task<IList<Supplier>> GetAllAsync()
        {
            return await _supplierDal.GetAllAsync();
        }

        public async Task<Supplier> GetByIdAsync(int supplierId)
        {
            return await _supplierDal.GetByIdAsync(supplierId);
        }

        public async Task UpdateAsync(Supplier supplier)
        {
            await _supplierDal.UpdateAsync(supplier, supplier.Id, true);
        }
    }
}
