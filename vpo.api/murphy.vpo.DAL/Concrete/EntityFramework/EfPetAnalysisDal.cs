using murphy.vpo.Core.DataAccess.EntityFramework;
using murphy.vpo.DAL.Abstract;
using murphy.vpo.Entity.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace murphy.vpo.DAL.Concrete.EntityFramework
{
    public class EfPetAnalysisDal : EfEntityRepositoryBase<PetAnalysis>, IPetAnalysisDal
    {
        private VpoDbContext _vpoDbContext;
        public EfPetAnalysisDal(VpoDbContext vpoDbContext) : base(vpoDbContext)
        {
            _vpoDbContext = vpoDbContext;
        }
    }
}
