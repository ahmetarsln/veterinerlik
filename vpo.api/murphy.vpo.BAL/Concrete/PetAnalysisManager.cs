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
    public class PetAnalysisManager : IPetAnalysisService
    {
        private readonly IPetAnalysisDal _PetAnalysisDal;
        public PetAnalysisManager(IPetAnalysisDal petAnalysisDal)
        {
            _PetAnalysisDal = petAnalysisDal;
        }
        public async Task AddAsync(PetAnalysis PetAnalysis)
        {
            await _PetAnalysisDal.AddAsync(PetAnalysis, true);
        }

        public async Task DeleteAsync(int PetAnalysisId)
        {
            await _PetAnalysisDal.DeleteAsync(PetAnalysisId, true);
        }

        public async Task<IList<PetAnalysis>> GetAllAsync()
        {
            return await _PetAnalysisDal.GetAllAsync();
        }

        public async Task<PetAnalysis> GetByIdAsync(int PetAnalysisId)
        {
            return await _PetAnalysisDal.GetByIdAsync(PetAnalysisId);
        }

        public async Task UpdateAsync(PetAnalysis PetAnalysis)
        {
            await _PetAnalysisDal.UpdateAsync(PetAnalysis, PetAnalysis.Id, true);
        }
    }
}
