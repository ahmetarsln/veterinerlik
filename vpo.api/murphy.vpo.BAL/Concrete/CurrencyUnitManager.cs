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
    public class CurrencyUnitManager : ICurrencyUnitService
    {
        private readonly ICurrencyUnitDal _currencyUnitDal;

        public CurrencyUnitManager(ICurrencyUnitDal currencyUnitDal)
        {
            _currencyUnitDal = currencyUnitDal;
        }

        public async Task AddAsync(CurrencyUnit currencyUnit)
        {
            await _currencyUnitDal.AddAsync(currencyUnit, true);
        }

        public async Task DeleteAsync(int currencyUnitId)
        {
            await _currencyUnitDal.DeleteAsync(currencyUnitId, true);
        }

        public async Task<IList<CurrencyUnit>> GetAllAsync()
        {
            return await _currencyUnitDal.GetAllAsync();
        }

        public async Task<CurrencyUnit> GetByIdAsync(int currencyUnitId)
        {
            return await _currencyUnitDal.GetByIdAsync(currencyUnitId);
        }

        public async Task UpdateAsync(CurrencyUnit currencyUnit)
        {
            await _currencyUnitDal.UpdateAsync(currencyUnit, currencyUnit.Id, true);
        }
    }
}
