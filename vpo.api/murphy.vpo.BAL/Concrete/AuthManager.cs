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
    public class AuthManager : IAuthService
    {
        private IUserDal _userRepository;
        private IRoleDal _roleRepository;
        private IUserRoleDal _userroleRepository;
        public AuthManager(IUserDal userRepository, IRoleDal roleRepository, IUserRoleDal userroleRepository)
        {
            _userRepository = userRepository;
            _roleRepository = roleRepository;
            _userroleRepository = userroleRepository;
        }

        public async Task<User> ChangePasswordAsync(string username, string oldpassword, string newpassword)
        {
            var user = await _userRepository.FindAsync(x => x.Username == username);


            if (user == null)
                return null;
            if (!VerifyPasswordHash(oldpassword, user.PasswordHash, user.PasswordSalt))
                return null;

            byte[] passwordHash, passwordSalt;

            CreatePasswordHash(newpassword, out passwordHash, out passwordSalt);
            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;
            return await _userRepository.UpdateAsync(user, user.Id, true) as User;
        }

        public async Task<User> ForgotPasswordAsync(Guid g, string newpassword)
        {
            var user = await _userRepository.FindAsync(x => x.ForgotPasswordGuid == g && x.ForgotPasswordValidDate >= DateTime.Now);

            if (user == null)
                return null;

            byte[] passwordHash, passwordSalt;

            CreatePasswordHash(newpassword, out passwordHash, out passwordSalt);
            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;
            user.ForgotPasswordGuid = null;
            user.ForgotPasswordValidDate = null;
            await _userRepository.UpdateAsync(user, user.Id, true);

            return _userRepository.GetById(user.Id);
        }

        public async Task<IList<Role>> GetRolesAsync()
        {
            return await _roleRepository.GetAllAsync();
        }

        public async Task<IList<UserRole>> GetUserRolesByUserAsync(string username)
        {
            return await _userroleRepository.FindAllAsync(x => x.User.Username == username);

        }

        public async Task<User> LoginAsync(string username, string password)
        {
            var user = await _userRepository.FindAsync(x => x.Username == username);

            if (user == null)
                return null;
            if (!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
                return null;

            return user;
        }

        public async Task<User> RegisterAsync(User user, string password)
        {
            byte[] passwordHash, passwordSalt;
            CreatePasswordHash(password, out passwordHash, out passwordSalt);
            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;
            return await _userRepository.AddAsync(user, true) as User;
        }

        public async Task<bool> UserExitsAsync(string username)
        {
            return await _userRepository.FindAsync(x => x.Username == username) is null ? false : true;
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {

                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != passwordHash[i]) return false;
                }
            }
            return true;
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }

        }

        public async Task<User> GetUserByUsernameAsync(string username) => await _userRepository.FindAsync(x => x.Username == username);

        public async Task<Role> GetRoleByNameAsync(string rolename) => await _roleRepository.FindAsync(x => x.Name == rolename);

        public async Task<bool> AddDefaultRole(string username)
        {
            var user = await GetUserByUsernameAsync(username);

            var defaultRole = await GetRoleByNameAsync("Member");

            var newUserRole = new UserRole { UserId = user.Id, RoleId = defaultRole.Id };

            return await _userroleRepository.AddAsync(newUserRole, true) is null ? false : true;
        }
    }
}
