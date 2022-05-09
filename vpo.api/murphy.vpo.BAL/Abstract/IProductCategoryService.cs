using murphy.vpo.Entity.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace murphy.vpo.BAL.Abstract
{
    public interface IProductCategoryService
    {
        Task<IList<ProductCategory>> GetAllAsync();
        Task AddAsync(ProductCategory productCategory);
        Task UpdateAsync(ProductCategory productCategory);
        Task DeleteAsync(int productCategoryId);
        Task<ProductCategory> GetByIdAsync(int productCategoryId);
    }
}
