using murphy.vpo.Entity.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace murphy.vpo.BAL.Abstract
{
    public interface IMeasurementUnitService
    {
        Task<IList<MeasurementUnit>> GetAllAsync();
        Task AddAsync(MeasurementUnit measurementUnit);
        Task UpdateAsync(MeasurementUnit measurementUnit);
        Task DeleteAsync(int measurementUnitId);
        Task<MeasurementUnit> GetByIdAsync(int measurementUnitId);
    }
}
