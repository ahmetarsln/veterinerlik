using murphy.vpo.Entity.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace murphy.vpo.BAL.Abstract
{
    public interface IRoleService
    {
        Task<IList<Role>> GetAllAsync();
        Task<Role> GetRoleByNameAsync(string rolename);
        Task AddAsync(Role role);
        Task UpdateAsync(Role role);
        Task DeleteAsync(int roleId);
        Task<Role> GetByIdAsync(int roleId);
    }
}
