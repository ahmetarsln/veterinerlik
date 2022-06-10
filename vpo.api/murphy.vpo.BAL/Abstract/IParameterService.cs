using murphy.vpo.Entity.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace murphy.vpo.BAL.Abstract
{
    public interface IParameterService
    {
        Task<IList<Parameter>> GetAllAsync();
        Task AddAsync(Parameter parameter);
        Task UpdateAsync(Parameter parameter);
        Task DeleteAsync(int parameterId);
        Task<Parameter> GetByIdAsync(int parameterId);
    }
}
