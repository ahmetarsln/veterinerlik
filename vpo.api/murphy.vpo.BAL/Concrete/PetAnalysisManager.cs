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
        private readonly IPetAnalysisDal _petAnalysisDal;
        public PetAnalysisManager(IPetAnalysisDal petAnalysisDal)
        {
            _petAnalysisDal = petAnalysisDal;
        }
        public async Task AddAsync(PetAnalysis petAnalysis)
        {
            await _petAnalysisDal.AddAsync(petAnalysis, true);
        }

        public async Task DeleteAsync(int petAnalysisId)
        {
            await _petAnalysisDal.DeleteAsync(petAnalysisId, true);
        }

        public async Task<IList<PetAnalysis>> GetAllAsync()
        {
            return await _petAnalysisDal.GetAllAsync();
        }

        public async Task<PetAnalysis> GetByIdAsync(int petAnalysisId)
        {
            return await _petAnalysisDal.GetByIdAsync(petAnalysisId);
        }

        public async Task UpdateAsync(PetAnalysis petAnalysis)
        {
            await _petAnalysisDal.UpdateAsync(petAnalysis, petAnalysis.Id, true);
        }
    }
}
