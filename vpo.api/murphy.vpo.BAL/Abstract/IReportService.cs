using murphy.vpo.Entity.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace murphy.vpo.BAL.Abstract
{
    public interface IReportService
    {
        Task<IList<Report>> GetAllAsync();
        Task AddAsync(Report report);
        Task UpdateAsync(Report report);
        Task DeleteAsync(int reportId);
        Task<Report> GetByIdAsync(int reportId);
    }
}
