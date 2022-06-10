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
    public class ClinicalInformationManager : IClinicalInformationService
    {
        private readonly IClinicalInformationDal _clinicalInformationDal;

        public ClinicalInformationManager(IClinicalInformationDal clinicalInformationDal)
        {
            _clinicalInformationDal = clinicalInformationDal;
        }

        public async Task AddAsync(ClinicalInformation clinicalInformation)
        {
            await _clinicalInformationDal.AddAsync(clinicalInformation, true);
        }

        public async Task DeleteAsync(int clinicalInformationId)
        {
            await _clinicalInformationDal.DeleteAsync(clinicalInformationId, true);
        }

        public async Task<IList<ClinicalInformation>> GetAllAsync()
        {
            return await _clinicalInformationDal.GetAllAsync();
        }

        public async Task<ClinicalInformation> GetByIdAsync(int clinicalInformationId)
        {
            return await _clinicalInformationDal.GetByIdAsync(clinicalInformationId);
        }

        public async Task UpdateAsync(ClinicalInformation clinicalInformation)
        {
            await _clinicalInformationDal.UpdateAsync(clinicalInformation, clinicalInformation.Id, true);
        }
    }
}
