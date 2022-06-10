using murphy.vpo.Entity.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace murphy.vpo.BAL.Abstract
{
    public interface ITaxRateService
    {

        Task<IList<TaxRate>> GetAllAsync();
        Task AddAsync(TaxRate taxRate);
        Task UpdateAsync(TaxRate taxRate);
        Task DeleteAsync(int taxRateId);
        Task<TaxRate> GetByIdAsync(int taxRateId);
    }
}
