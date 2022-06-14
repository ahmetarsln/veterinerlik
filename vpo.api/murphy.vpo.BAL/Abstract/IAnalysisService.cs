using murphy.vpo.Entity.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace murphy.vpo.BAL.Abstract
{
    public interface IAnalysisService
    {
        Task<IList<Analysis>> GetAllAsync();
        Task AddAsync(Analysis analysis);
        Task UpdateAsync(Analysis analysis);
        Task DeleteAsync(int analysisId);
        Task<Analysis> GetByIdAsync(int analysisId);
    }
}
