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
    public class RoleManager : IRoleService
    {
        private readonly IRoleDal _roleDal;

        public RoleManager(IRoleDal roleDal)
        {
            _roleDal = roleDal;
        }

        public async Task AddAsync(Role role)
        {
            await _roleDal.AddAsync(role, true);
        }

        public async Task DeleteAsync(int roleId)
        {
            await _roleDal.DeleteAsync(roleId, true);
        }

        public async Task<IList<Role>> GetAllAsync()
        {
            return await _roleDal.GetAllAsync();
        }

        public async Task<Role> GetByIdAsync(int roleId)
        {
            return await _roleDal.GetByIdAsync(roleId);
        }

        public async Task<Role> GetRoleByNameAsync(string rolename)
        {
            return await _roleDal.FindAsync(r => r.Name == rolename);
        }

        public async Task UpdateAsync(Role role)
        {
            await _roleDal.UpdateAsync(role, role.Id, true);
        }
    }
}
