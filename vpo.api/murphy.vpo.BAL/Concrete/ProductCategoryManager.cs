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
    public class ProductCategoryManager : IProductCategoryService
    {
        private readonly IProductCategoryDal _productCategoryDal;

        public ProductCategoryManager(IProductCategoryDal productCategoryDal)
        {
            _productCategoryDal = productCategoryDal;
        }

        public async Task AddAsync(ProductCategory productCategory)
        {
            await _productCategoryDal.AddAsync(productCategory, true);
        }

        public async Task DeleteAsync(int productCategoryId)
        {
            await _productCategoryDal.DeleteAsync(productCategoryId, true);
        }

        public async Task<IList<ProductCategory>> GetAllAsync()
        {
            return await _productCategoryDal.GetAllAsync();
        }

        public async Task<ProductCategory> GetByIdAsync(int productCategoryId)
        {
            return await _productCategoryDal.GetByIdAsync(productCategoryId);
        }

        public async Task UpdateAsync(ProductCategory productCategory)
        {
            await _productCategoryDal.UpdateAsync(productCategory, productCategory.Id, true);
        }
    }
}
