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
    class UserRoleManager : IUserRoleService
    {
        private readonly IUserRoleDal _userRoleDal;
        public UserRoleManager(IUserRoleDal userRoleDal)
        {
            _userRoleDal = userRoleDal;
        }

        public async Task AddAsync(UserRole userRole)
        {
            await _userRoleDal.AddAsync(userRole, true);
        }

        public async Task DeleteAsync(int userRoleId)
        {
            await _userRoleDal.DeleteAsync(userRoleId, true);
        }

        public async Task<IList<UserRole>> GetAllAsync()
        {
            return await _userRoleDal.GetAllAsync();
        }

        public async Task<IList<UserRole>> GetAllByRoleIdAsync(int roleId)
        {
            return await _userRoleDal.FindAllAsync(x => x.RoleId == roleId);
        }

        public async Task<IList<UserRole>> GetAllByUserIdAndRoleIdAsync(int userId, int roleId)
        {
            return await _userRoleDal.FindAllAsync(x => x.UserId == userId && x.RoleId == roleId);
        }

        public async Task<IList<UserRole>> GetAllByUserIdAsync(int userId)
        {
            return await _userRoleDal.FindAllAsync(x => x.UserId == userId);
        }

        public async Task<UserRole> GetByIdAsync(int userRoleId)
        {
            return await _userRoleDal.GetByIdAsync(userRoleId);
        }

        public async Task UpdateAsync(UserRole userRole)
        {
            await _userRoleDal.UpdateAsync(userRole, userRole.Id, true);
        }

    }
}
