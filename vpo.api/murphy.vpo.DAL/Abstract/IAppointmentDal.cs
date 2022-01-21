using murphy.vpo.Core.DataAccess;
using murphy.vpo.Entity.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace murphy.vpo.DAL.Abstract
{
    public interface IAppointmentDal :IEntityRepository<Appointment>
    {
    }
}
