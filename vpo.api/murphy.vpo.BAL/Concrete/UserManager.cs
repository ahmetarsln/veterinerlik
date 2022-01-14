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
    public class UserManager : IUserService
    {
        private readonly IUserDal _userDal;
        public UserManager(IUserDal userDal)
        {
            _userDal = userDal;
        }
        public async Task AddAsync(User user)
        {
            await _userDal.AddAsync(user, true);
        }

        public async Task DeleteAsync(int userId)
        {
            await _userDal.DeleteAsync(userId, true);
        }

        public async Task<IList<User>> GetAllAsync()
        {
            return await _userDal.GetAllAsync();
        }

        public async Task<User> GetByIdAsync(int userId)
        {
            return await _userDal.GetByIdAsync(userId);
        }

        public async Task UpdateAsync(User user)
        {
            await _userDal.UpdateAsync(user, user.Id, true);
        }
    }
}
