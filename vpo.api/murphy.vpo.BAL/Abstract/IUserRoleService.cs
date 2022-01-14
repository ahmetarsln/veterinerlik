using murphy.vpo.Entity.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace murphy.vpo.BAL.Abstract
{
    public interface IUserRoleService
    {
        Task<IList<UserRole>> GetAllAsync();
        Task<IList<UserRole>> GetAllByUserIdAsync(int userId);
        Task<IList<UserRole>> GetAllByRoleIdAsync(int roleId);

        Task<IList<UserRole>> GetAllByUserIdAndRoleIdAsync(int userId, int roleId);
        Task AddAsync(UserRole userRole);
        Task UpdateAsync(UserRole userRole);
        Task DeleteAsync(int userRoleId);
        Task<UserRole> GetByIdAsync(int userRoleId);

    }
}
