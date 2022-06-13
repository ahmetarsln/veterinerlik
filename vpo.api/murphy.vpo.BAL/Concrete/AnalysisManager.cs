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
    public class AnalysisManager : IAnalysisService
    {
        private readonly IAnalysisDal _analysisDal;
        public AnalysisManager(IAnalysisDal AnalysisDal)
        {
            _analysisDal = AnalysisDal;
        }
        public async Task AddAsync(Analysis analysis)
        {
            await _analysisDal.AddAsync(analysis, true);
        }

        public async Task DeleteAsync(int analysisId)
        {
            await _analysisDal.DeleteAsync(analysisId, true);
        }

        public async Task<IList<Analysis>> GetAllAsync()
        {
            return await _analysisDal.GetAllAsync();
        }

        public async Task<Analysis> GetByIdAsync(int analysisId)
        {
            return await _analysisDal.GetByIdAsync(analysisId);
        }

        public async Task UpdateAsync(Analysis analysis)
        {
            await _analysisDal.UpdateAsync(analysis, analysis.Id, true);
        }
    }
}
