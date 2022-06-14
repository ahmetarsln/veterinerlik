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
    public class ReportManager : IReportService
    {
        private readonly IReportDal _reportDal;

        public ReportManager(IReportDal reportDal)
        {
            _reportDal = reportDal;
        }

        public async Task AddAsync(Report report)
        {
            await _reportDal.AddAsync(report, true);
        }

        public async Task DeleteAsync(int reportId)
        {
            await _reportDal.DeleteAsync(reportId, true);
        }

        public async Task<IList<Report>> GetAllAsync()
        {
            return await _reportDal.GetAllAsync();
        }

        public async Task<Report> GetByIdAsync(int reportId)
        {
            return await _reportDal.GetByIdAsync(reportId);
        }

        public async Task UpdateAsync(Report report)
        {
            await _reportDal.UpdateAsync(report, report.Id, true);
        }
    }
}
