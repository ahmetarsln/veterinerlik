using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using murphy.vpo.Core.DataAccess;
using murphy.vpo.Entity.Concrete;

namespace murphy.vpo.DAL.Abstract
{
    public interface ICustomerDal : IEntityRepository<Pet>
    {
        Task AddAsync(Customer customer, bool v);
    }
}
