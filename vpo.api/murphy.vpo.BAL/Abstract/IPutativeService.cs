using murphy.vpo.Entity.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace murphy.vpo.BAL.Abstract
{
    public interface IPutativeService
    {
        Task<IList<Putative>> GetAllAsync();
        Task AddAsync(Putative putative);
        Task UpdateAsync(Putative putative);
        Task DeleteAsync(int putativeId);
        Task<Putative> GetByIdAsync(int putativeId);
    }
}
