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
    public class ForgetpasswordManager : IForgetpasswordService
    {
        private readonly IForgetpasswordDal _forgetpasswordDal;

        public ForgetpasswordManager(IForgetpasswordDal forgetpasswordDal)
        {
            _forgetpasswordDal = forgetpasswordDal;
        }

        public async Task AddAsync(Forgetpassword forgetpassword)
        {
            await _forgetpasswordDal.AddAsync(forgetpassword, true);
        }

        public async Task DeleteAsync(int forgetpasswordId)
        {
            await _forgetpasswordDal.DeleteAsync(forgetpasswordId, true);
        }

        public async Task<IList<Forgetpassword>> GetAllAsync()
        {
            return await _forgetpasswordDal.GetAllAsync();
        }

        public async Task<Forgetpassword> GetByIdAsync(int forgetpasswordId)
        {
            return await _forgetpasswordDal.GetByIdAsync(forgetpasswordId);
        }

        public async Task UpdateAsync(Forgetpassword forgetpassword)
        {
            await _forgetpasswordDal.UpdateAsync(forgetpassword, forgetpassword.Id, true);
        }
    }
}
