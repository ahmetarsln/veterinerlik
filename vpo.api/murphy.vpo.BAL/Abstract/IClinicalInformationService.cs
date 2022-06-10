using murphy.vpo.Entity.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace murphy.vpo.BAL.Abstract
{
    public interface IClinicalInformationService
    {
        Task<IList<ClinicalInformation>> GetAllAsync();
        Task AddAsync(ClinicalInformation clinicalInformation);
        Task UpdateAsync(ClinicalInformation clinicalInformation);
        Task DeleteAsync(int clinicalInformationId);
        Task<ClinicalInformation> GetByIdAsync(int clinicalInformationId);
    }
}
