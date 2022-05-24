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
    public class MeasurementUnitManager : IMeasurementUnitService
    {
        private readonly IMeasurementUnitDal _measurementUnitDal;

        public MeasurementUnitManager(IMeasurementUnitDal measurementUnitDal)
        {
            _measurementUnitDal = measurementUnitDal;
        }

        public async Task AddAsync(MeasurementUnit measurementUnit)
        {
            await _measurementUnitDal.AddAsync(measurementUnit, true);
        }

        public async Task DeleteAsync(int measurementUnitId)
        {
            await _measurementUnitDal.DeleteAsync(measurementUnitId, true);
        }

        public async Task<IList<MeasurementUnit>> GetAllAsync()
        {
            return await _measurementUnitDal.GetAllAsync();
        }

        public async Task<MeasurementUnit> GetByIdAsync(int measurementUnitId)
        {
            return await _measurementUnitDal.GetByIdAsync(measurementUnitId);
        }

        public async Task UpdateAsync(MeasurementUnit measurementUnit)
        {
            await _measurementUnitDal.UpdateAsync(measurementUnit, measurementUnit.Id, true);
        }
    }
}
