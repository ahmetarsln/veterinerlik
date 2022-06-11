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
    public class TaxRateManager : ITaxRateService
    {
        private readonly ITaxRateDal _taxRateDal;

        public TaxRateManager(ITaxRateDal taxRateDal)
        {
            _taxRateDal = taxRateDal;
        }

        public async Task AddAsync(TaxRate taxRate)
        {
            await _taxRateDal.AddAsync(taxRate, true);
        }

        public async Task DeleteAsync(int taxRateId)
        {
            await _taxRateDal.DeleteAsync(taxRateId, true);
        }

        public async Task<IList<TaxRate>> GetAllAsync()
        {
            return await _taxRateDal.GetAllAsync();
        }

        public async Task<TaxRate> GetByIdAsync(int taxRateId)
        {
            return await _taxRateDal.GetByIdAsync(taxRateId);
        }

        public async Task UpdateAsync(TaxRate taxRate)
        {
            await _taxRateDal.UpdateAsync(taxRate, taxRate.Id, true);
        }
    }
}
