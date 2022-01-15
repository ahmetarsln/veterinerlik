using murphy.vpo.Entity.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace murphy.vpo.BAL.Abstract
{
    public interface IAuthService
    {
        Task<User> RegisterAsync(User user, string password);
        Task<User> LoginAsync(string username, string password);
        Task<User> ChangePasswordAsync(string user, string oldpassword, string newpassword);
        Task<User> ForgotPasswordAsync(Guid g, string newpassword);
        Task<bool> UserExitsAsync(string username);
        Task<User> GetUserByUsernameAsync(string username);
        Task<Role> GetRoleByNameAsync(string rolename);
        Task<IList<UserRole>> GetUserRolesByUserAsync(string username);
        Task<IList<Role>> GetRolesAsync();

        Task<bool> AddDefaultRole(string username);
    }
}
