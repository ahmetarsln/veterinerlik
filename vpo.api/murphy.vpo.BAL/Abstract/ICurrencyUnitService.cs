using murphy.vpo.Entity.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace murphy.vpo.BAL.Abstract
{
    public interface ICurrencyUnitService
    {
        Task<IList<CurrencyUnit>> GetAllAsync();
        Task AddAsync(CurrencyUnit currencyUnit);
        Task UpdateAsync(CurrencyUnit currencyUnit);
        Task DeleteAsync(int currencyUnitId);
        Task<CurrencyUnit> GetByIdAsync(int currencyUnitId);
    }
}
