using murphy.vpo.Entity.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace murphy.vpo.BAL.Abstract
{
    public interface IForgetpasswordService
    {
        Task<IList<Forgetpassword>> GetAllAsync();
        Task AddAsync(Forgetpassword forgetpassword);
        Task UpdateAsync(Forgetpassword forgetpassword);
        Task DeleteAsync(int forgetpasswordId);
        Task<Forgetpassword> GetByIdAsync(int forgetpasswordId);
    }
}
