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
    public class ParameterManager : IParameterService
    {
        private readonly IParameterDal _parameterDal;

        public ParameterManager(IParameterDal parameterDal)
        {
            _parameterDal = parameterDal;
        }

        public async Task AddAsync(Parameter parameter)
        {
            await _parameterDal.AddAsync(parameter, true);
        }

        public async Task DeleteAsync(int parameterId)
        {
            await _parameterDal.DeleteAsync(parameterId, true);
        }

        public async Task<IList<Parameter>> GetAllAsync()
        {
            return await _parameterDal.GetAllAsync();
        }

        public async Task<Parameter> GetByIdAsync(int parameterId)
        {
            return await _parameterDal.GetByIdAsync(parameterId);
        }

        public async Task UpdateAsync(Parameter parameter)
        {
            await _parameterDal.UpdateAsync(parameter, parameter.Id, true);
        }
    }
}
