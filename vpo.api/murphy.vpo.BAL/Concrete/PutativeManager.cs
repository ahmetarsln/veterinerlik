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
    public class PutativeManager : IPutativeService
    {
        private readonly IPutativeDal _putativeDal;

        public PutativeManager(IPutativeDal putativeDal)
        {
            _putativeDal = putativeDal;
        }

        public async Task AddAsync(Putative putative)
        {
            await _putativeDal.AddAsync(putative, true);
        }

        public async Task DeleteAsync(int putativeId)
        {
            await _putativeDal.DeleteAsync(putativeId, true);
        }

        public async Task<IList<Putative>> GetAllAsync()
        {
            return await _putativeDal.GetAllAsync();
        }

        public async Task<Putative> GetByIdAsync(int putativeId)
        {
            return await _putativeDal.GetByIdAsync(putativeId);
        }

        public async Task UpdateAsync(Putative putative)
        {
            await _putativeDal.UpdateAsync(putative, putative.Id, true);
        }
    }
}
