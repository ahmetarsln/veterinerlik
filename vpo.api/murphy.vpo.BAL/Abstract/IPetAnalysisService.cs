using murphy.vpo.Entity.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace murphy.vpo.BAL.Abstract
{
    public interface IPetAnalysisService
    {
        Task<IList<PetAnalysis>> GetAllAsync();
        Task AddAsync(PetAnalysis petAnalysis);
        Task UpdateAsync(PetAnalysis petAnalysis);
        Task DeleteAsync(int petAnalysisId);
        Task<PetAnalysis> GetByIdAsync(int petAnalysisId);
    }
}
