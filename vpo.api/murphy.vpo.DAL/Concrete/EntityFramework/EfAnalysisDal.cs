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
    public class EfAnalysisDal: EfEntityRepositoryBase<Analysis>,IAnalysisDal
    {
        private VpoDbContext _vpoDbContext;
        public EfAnalysisDal(VpoDbContext vpoDbContext) : base(vpoDbContext)
        {
            _vpoDbContext = vpoDbContext;
        }
    }
}
